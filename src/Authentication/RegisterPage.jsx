import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, Modal, Select, Checkbox } from "antd";

import bluebg from "../Images/bluebg.jpg";
import styled, { keyframes } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Colors } from "../Colors/ColorComponent";
const { Option } = Select;
const Heading = styled.div`
  h2 {
    background: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  background-image: url(${bluebg});

  background-size: cover;

  color: white;

  background-position: center;
  text-align: center;
`;
const RegisterPageContainer = styled.div`
  margin: auto;
  width: 400px;
  margin-top: 10px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  @media screen and (max-width: 320px) {
    width: 270px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 300px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 380px;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: ${Colors.darkBlue};
`;

const StyledModalInput = styled(Input)`
  width: 100%;
  margin-bottom: 10px;
`;

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [form] = Form.useForm();

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [existingProfile, setExistingProfile] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePassword = (_, value) => {
    if (!value || !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)) {
      return Promise.reject(
        "Password must contain at least one special character",
      );
    }
    return Promise.resolve();
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      message.success("Work in progress....");
      form.resetFields();
    } catch (error) {
      console.error("Error sending verification code:", error);
      message.error("Failed to send verification code");
    } finally {
      setLoading(false);
    }
  };

  const handleVerification = async () => {
    try {
      message.success("Work in progress");
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  const sendVerificationCode = async (email) => {
    const response = await ResetSendEmail({ email });
  };

  const verifyCode = async (verificationCode) => {
    try {
      const response = await axios.post(
        "https://cashflowcapital.onrender.com/api/email/verify-code",
        {
          verificationCode,
          token: JSON.parse(localStorage.getItem("verificationToken")),
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {" "}
      <Heading>
        {" "}
        <h2>Create Your Focus 2 Career Account</h2>
      </Heading>
      <RegisterPageContainer>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
        >
          <Form.Item
            name="AccessCode"
            label="Your Access Code"
            rules={[
              { required: true, message: "Please enter your AccessCode" },
            ]}
          >
            <StyledInput />
          </Form.Item>
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <StyledInput />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: "email", message: "Please enter a valid email" },
              { required: true, message: "Please enter your email" },
            ]}
          >
            <StyledInput />
          </Form.Item>
          <Form.Item
            name="confirmEmail"
            label="Confirm Email"
            rules={[
              { type: "email", message: "Please enter a valid email" },
              { required: true, message: "Please enter your email" },
            ]}
          >
            <StyledInput />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please enter your password" },
              {
                min: 7,
                message: "Password must be at least 7 characters long",
              },
              { validator: validatePassword },
            ]}
          >
            <StyledInput.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("The two passwords do not match");
                },
              }),
            ]}
          >
            <StyledInput.Password />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Student ID: E#"
            rules={[
              { required: true, message: "Please enter your Student ID" },
              {
                message: "Please enter your Student ID",
              },
            ]}
          >
            <StyledInput />
          </Form.Item>
          <Form.Item
            label="Year of Graduation"
            name="graduationYear"
            rules={[
              {
                required: true,
                message: "Please select your graduation year!",
              },
            ]}
          >
            <Select placeholder="-- select one --">
              <Option value="2024">2024</Option>
              <Option value="2025">2025</Option>
              <Option value="2026">2026</Option>
              <Option value="2027">2027</Option>
              <Option value="2028">2028</Option>
              <Option value="2029">2029</Option>
              <Option value="2030">2030</Option>
              <Option value="alumni">Alumni</Option>
              <Option value="staff">Staff / Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="What brought you in today?"
            name="graduationYear"
            rules={[
              {
                required: true,
                message: "Please select your graduation year!",
              },
            ]}
          >
            <Select placeholder="-- select one --">
              <Option value="academic-adviser-referral">
                Academic Adviser Referral
              </Option>
              <Option value="athlete">Athlete</Option>
              <Option value="case">
                Center for Advisement & Student Excellence (CASE)
              </Option>
              <Option value="etsu-1020">ETSU 1020</Option>
              <Option value="internal-referral">Internal Referral</Option>
              <Option value="pre-health">Pre-Health</Option>
              <Option value="puzzle-of-life">Puzzle of Life</Option>
              <Option value="alumni">Alumni</Option>
              <Option value="veteran-affairs">Veteran Affairs</Option>
              <Option value="public-health">Public Health</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <CenteredCheckbox>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "You must agree to the terms and conditions!",
                },
              ]}
            >
              <Checkbox>
                I agree to the <a href="/terms">Terms & Conditions</a> *
              </Checkbox>
            </Form.Item>
          </CenteredCheckbox>
          <Form.Item>
            <StyledButton type="primary" htmlType="submit" loading={loading}>
              Register
            </StyledButton>
          </Form.Item>
        </Form>

        <Modal
          title="Enter Verification Code"
          visible={modalVisible}
          onOk={handleVerification}
          onCancel={() => setModalVisible(false)}
        >
          <StyledModalInput
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </Modal>

        {registrationSuccess && (
          <p style={{ color: "green" }}>Registration successful</p>
        )}
        {existingProfile && (
          <p style={{ color: "red" }}>Profile already exists</p>
        )}
      </RegisterPageContainer>
    </>
  );
};

export default RegisterPage;
const CenteredCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;
