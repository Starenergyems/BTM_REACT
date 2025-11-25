import { Fragment, useEffect, useRef, useState } from "react";
import { Col, Form, Row, Spin } from "antd";
import {
  getFormUnit,
  getInitialValues,
  getOffset,
  onReset,
  onSubmit,
} from "./indexHelper";
import ScopeStyle from "./indexStyle";

/* 注意事項：
  1.onSuccess為表單驗證(modalForm元件內的驗證)，成功後要執行的function
    若外部prop帶入onOk，會將表單驗證的function完全覆蓋
  2.欄位onChange事件請加在list的props層(selectProps,inputProps,datePickerProps...)而不要加在attr層(selectProps.selectAttr，inputProps.inputAttr,...) 
  3.name、value請加在formItemAttr層
*/
function ModalForm({
  formAttr,
  groupTitleSetting = [] /*
    groupTitleSetting:[[要出現標題的list index,標題內容]] 例如[[2, "甲方"],[6, "乙方"]]
  */,
  isLoading,
  list /*
    list:{
      id,isHidden,isFullWidth,formItemAttr,type,selectProps,inputProps,datePickerProps
    }
  */,
  modalAttr,
  onFormReady,
  onFail,
  onSuccess,
  styles,
}) {
  const [formInstance] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dateFieldsRef = useRef([]); //紀錄date欄位，要統一處理日期
  const referenceIndexRef = useRef(null); //作為每個col,offset的依據(有出現滿版的項目或者group title的前一個index)

  //將form的instance綁定給元件外部使用
  useEffect(() => {
    if (typeof onFormReady === "function") {
      onFormReady(formInstance, isSubmitted);
    }
  }, [formInstance, isSubmitted, onFormReady]);

  // 動態更新表單值
  useEffect(() => {
    if (Array.isArray(list)) {
      const updatedValues = getInitialValues(list);
      if (Object.keys(updatedValues).length > 0) {
        formInstance.setFieldsValue(updatedValues);
      }
    }
  }, [list, formInstance]);

  return (
    <ScopeStyle
      $customStyle={styles}
      afterClose={() => onReset(formInstance, setIsSubmitted)}
      closeIcon={false}
      forceRender
      okButtonProps={{
        className: "btn-ok",
        htmlType: "submit",
      }}
      onOk={() =>
        onSubmit(
          formInstance,
          onFail,
          onSuccess,
          setIsSubmitted,
          dateFieldsRef.current
        )
      }
      {...modalAttr}
      cancelButtonProps={{
        type: "primary",
        className: "btn-cancel",
        ...modalAttr.cancelButtonProps,
      }}
      styles={{
        header: { textAlign: "center" },
        footer: {
          textAlign: "center",
          direction: "rtl",
        },
        ...modalAttr?.styles,
      }}
    >
      {isLoading ? (
        <Spin />
      ) : (
        <div className="form-box">
          {Array.isArray(list) && (
            <Form
              form={formInstance}
              initialValues={getInitialValues(list)}
              layout="vertical"
              validateTrigger={isSubmitted ? "onChange" : "onSubmit"}
              {...formAttr}
            >
              {/* 為了讓每次開啟Modal時，scrollbar都在最上方 */}
              {modalAttr?.open && (
                <Row gutter={32}>
                  {list.map((item, index) => {
                    const isTextarea = item.type === "textarea";
                    const isCustom = item.type === "custom";
                    const isHaveGroupTitle = groupTitleSetting?.some(
                      (item) => item[0] === index
                    );
                    const isUpload = item.type === "upload";
                    const isFullWidth =
                      isTextarea || isCustom || item.isFullWidth;
                    const groupTitleData = groupTitleSetting?.find(
                      (item) => item[0] === index
                    );
                    const extraProps = isUpload
                      ? {
                          valuePropName: "fileList",
                          getValueFromEvent: (e) => e?.fileList,
                        }
                      : {};
                    return (
                      <Fragment key={item.id || index}>
                        {groupTitleData?.length > 0 && (
                          <Col
                            span={24}
                            className="group-title-box mg-t-10 mg-b-15"
                          >
                            <h3 className="mg-0 pd-y-10">
                              {groupTitleData?.[1]}
                            </h3>
                          </Col>
                        )}
                        <Col
                          className={item.isHidden ? "custom-d-none" : ""}
                          span={isFullWidth ? 20 : 10}
                          offset={getOffset({
                            isFullWidth,
                            index,
                            isHaveGroupTitle,
                            item,
                            list,
                            referenceIndexRef,
                          })}
                        >
                          <Form.Item {...item.formItemAttr} {...extraProps}>
                            {getFormUnit(
                              item,
                              formInstance,
                              dateFieldsRef.current,
                              isSubmitted
                            )}
                          </Form.Item>
                        </Col>
                      </Fragment>
                    );
                  })}
                </Row>
              )}
            </Form>
          )}
        </div>
      )}
    </ScopeStyle>
  );
}

export default ModalForm;
