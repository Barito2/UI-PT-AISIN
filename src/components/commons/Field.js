import Select from "react-select";
import { Col, Input, Label, Row } from "reactstrap";

export const renderField = ({
  id,
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  optional,
  classNameLabel,
  maxLength,
  meta: { touched, error, warning }
}) => (
  <Row className="my-1">
    {label && (
      <>
        <Col md="2">
          <Label htmlFor={id} className={"col-form-label " + classNameLabel}>
            {label}
          </Label>
          <span>
            <i> {optional}</i>
          </span>
        </Col>
      </>
    )}
    <Col md="12">
      <Input
        {...input}
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="input-placeholder"
        readOnly={readOnly}
        invalid={error && touched}
        maxLength={maxLength}
      // style={{ textTransform: "uppercase" }}
      />
      {touched &&
        ((error && (
          <p
            style={{
              color: "#e53935",
              marginLeft: 5,
              fontSize: 16,
              marginBottom: 5
            }}
          >
            <i
              className="fa fa-exclamation-circle"
              style={{ fontSize: 17, marginRight: 5, marginTop: 10 }}
            />
            {error}
          </p>
        )) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

export const SelectField = ({
  input,
  options,
  id,
  placeholder,
  disabled,
  isLoading,
  label,
  isSearchable,
  noOptionsMessage,
  col,
  colLabel,
  defaultValue,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <Row>
        {label && (
          <Col md={colLabel || "2"} sm={2}>
            <Label htmlFor={id} className="col-form-label label-field">
              {label}
            </Label>
          </Col>
        )}
        <Col md={col ? col : 10} sm={10}>
          <Select
            {...input}
            inputId={id}
            loadingMessage={() => (
              <div>
                <span>Loading...</span>
                <i className="fa fa-spinner fa-pulse ml-2" />
              </div>
            )}
            isLoading={isLoading}
            onChange={value => input.onChange(value)}
            onBlur={event => {
              event.preventDefault();
              input.onBlur();
              // input.onBlur(options.filter(item => item.value === input.value)[0]);
            }}
            options={options}
            isDisabled={disabled}
            placeholder={placeholder}
            className="select-field"
            isSearchable={isSearchable}
            noOptionsMessage={() => noOptionsMessage}
            defaultValue={defaultValue}
            menuPortalTarget={document.body}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          />
          {touched &&
            ((error && (
              <p
                style={{
                  color: "#e53935",
                  marginLeft: 5,
                  fontSize: 16,
                  marginBottom: 5
                }}
              >
                <i
                  className="fa fa-exclamation-circle"
                  style={{ fontSize: 17, marginRight: 5, marginTop: 10 }}
                />
                {error}
              </p>
            )) ||
              (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
      </Row>
    </div>
  );
};
