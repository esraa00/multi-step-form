import { ReactNode } from "react";

type FormWrapperProps = {
  children: ReactNode;
  title: string;
};
const FormWrapper = ({ children, title }: FormWrapperProps) => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          margin: 0,
          marginBottom: "2rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto minmax(auto ,400px)",
          justifyContent: "flex-start",
          gap: "1rem 0.5rem",
        }}
      >
        {children}
      </div>
    </>
  );
};
export default FormWrapper;
