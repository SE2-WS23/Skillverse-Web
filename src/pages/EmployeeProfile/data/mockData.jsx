import { v4 as uuid } from "uuid";

const person1 = {
  skills: [
    { prmry: "Skill1", scndry: "1", uid: uuid() },
    { prmry: "Skill2", scndry: "2", uid: uuid() },
    { prmry: "Skill3", scndry: "5", uid: uuid() },
  ],
  certificates: [
    { prmry: "Cert1", scndry: "from school", uid: uuid() },
    { prmry: "Cert2", scndry: "from work", uid: uuid() },
    { prmry: "Cert3", scndry: "from uni", uid: uuid() },
  ],
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  files: ["cv.pdf", "report.pdf"],
  contacts: {
    phone: "+12345678",
    email: "username@email.com",
    address: "Street address 1",
  },
};

export default person1;
