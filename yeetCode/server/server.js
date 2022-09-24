const dotenv = require("dotenv");
dotenv.config();

const fs = require("fs");
// const data = fs.readFileSync("actual_code.py");
// console.log(data);

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const PythonShell = require("python-shell").PythonShell;
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send(`Hello from port ${PORT}!`);
});

// Python route & shell
app.post("/api/python", (req, res) => {
  fs.writeFileSync("./test.py", req.body.code);

  //   const testCases = {
  //     one: [1, 2, 3],
  //     two: [2, 2, 4],
  //     three: [2, -2, 0],
  //   };

  //   const promises = [];
  //   const testCaseResults = [];

  //   Object.keys(testCases).map((key) => {
  //     promises.push(
  //       new Promise((resolve, reject) => {
  //         PythonShell.run(
  //           "./test.py",
  //           {
  //             mode: "text",
  //             pythonOptions: ["-u"],
  //             args: testCases[key],
  //           },
  //           function (err, results) {
  //             if (err) {
  //               reject();
  //               throw err;
  //             }
  //             console.log(results);
  //             testCaseResults.push(results[0]);
  //             resolve(true);
  //           }
  //         );
  //       })
  //     );
  //   });

  //   Promise.all(promises).then(() => {
  //     res.json({ testCaseResults });
  //   });
  // });

  let options = {
    mode: "text",
    pythonOptions: ["-u"],
    args: [1, 2, 3],
  };

  PythonShell.run("./test.py", options, function (err, results) {
    if (err) throw err;
    res.json({ pythonTestCaseResults: results[0] });
  });
});

// Javascript routes & shell
// app.post("/api/javascript", (req, res) => {
//   // fs.writeFileSync("test.js", req.body.code);
//   res.json({ message: "would you look at that" });
// });

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on PORT ${PORT}`)
);
