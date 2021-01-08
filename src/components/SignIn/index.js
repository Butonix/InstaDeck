import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import {
  Container,
  DisplaySec,
  DisplayLogo,
  DisplayImage,
  InputSec,
  SignUpTitle,
  InputArea,
  Inputs,
  InputText,
  ButtonAgreement,
  CreateAcc,
  NoAccount,
} from "./styles/signIn";

export default function SignIn({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignIn.DisplaySec = function SignInDisplaySec({ children, ...restProps }) {
  return <DisplaySec {...restProps}>{children}</DisplaySec>;
};

SignIn.DisplayLogo = function SignInDisplayLogo({
  src,
  children,
  ...restProps
}) {
  return (
    <DisplayLogo {...restProps}>
      <ReactRouterLink to={ROUTES.START}>
        <img src={src} alt="Logo" />
      </ReactRouterLink>
    </DisplayLogo>
  );
};

SignIn.DisplayImage = function SignInDisplayImage({
  src,
  children,
  ...restProps
}) {
  return (
    <DisplayImage {...restProps}>
      <img src={src} alt="Page Model" />
    </DisplayImage>
  );
};

SignIn.InputSec = function SignInInputSec({ children, ...restProps }) {
  return <InputSec {...restProps}>{children}</InputSec>;
};

SignIn.SignUpTitle = function SignInSignUpTitle({ children, ...restProps }) {
  return (
    <SignUpTitle {...restProps}>
      <h2>
        Sign In <br />
        to <span>InstaDeck</span>
      </h2>
    </SignUpTitle>
  );
};

SignIn.InputArea = function SignInInputArea({ children, ...restProps }) {
  return <InputArea {...restProps}>{children}</InputArea>;
};

SignIn.Inputs = function SignInInputs({ children, ...restProps }) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

SignIn.InputText = function SignInInputText({
  type,
  placeholder,
  setAction,
  children,
  ...restProps
}) {
  return (
    <InputText {...restProps}>
      <h3>{children}</h3>
      <input
        type={type}
        placeholder={placeholder}
        setAction={setAction}
        onChange={(e) => setAction(e.target.value)}
      />
    </InputText>
  );
};

SignIn.ButtonAgreement = function SignInButtonAgreement({
  children,
  ...restProps
}) {
  return (
    <ButtonAgreement {...restProps}>
      {children}
      <h3>
        By signing up I agree to the <span>Private Policy</span>
        <br /> and <span>Terms of Services</span>
      </h3>
    </ButtonAgreement>
  );
};

SignIn.CreateAcc = function SignInCreateAcc({
  isInvalid,
  signIn,
  children,
  ...restProps
}) {
  return (
    <CreateAcc {...restProps}>
      <button disabled={isInvalid} type="submit" onClick={signIn}>
        <h3>Sign In</h3>
      </button>
    </CreateAcc>
  );
};

SignIn.NoAccount = function SignInNoAccount({ children, ...restProps }) {
  return (
    <NoAccount {...restProps}>
      If you don't have an account <br />
      <ReactRouterLink to={ROUTES.SIGN_UP}>
        <span>Sign Up Here</span>
      </ReactRouterLink>
    </NoAccount>
  );
};
