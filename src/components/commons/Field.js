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