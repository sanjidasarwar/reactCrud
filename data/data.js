import shortid from "shortid";

export const formField = {
  name: {
    id: shortid.generate(),
    type: "text",
    label: "Name",
    placeholder: "Enter Your Name",
  },
  email: {
    id: shortid.generate(),
    type: "email",
    label: "Email",
    placeholder: "Enter Your Email",
  },
  password: {
    id: shortid.generate(),
    type: "password",
    label: "Password",
    placeholder: "******",
  },
  phone: {
    id: shortid.generate(),
    type: "tel",
    label: "Phone No",
    placeholder: "Enter Your Phone Number",
  },
  country: {
    id: shortid.generate(),
    type: "select",
    label: "Country",
    options: [
      {id:shortid.generate(), value: "usa", label: "USA" },
      {id:shortid.generate(), value: "canada", label: "Canada" },
      {id:shortid.generate(), value: "uk", label: "UK" },
      // Add more options as needed
    ],
  },
};
