import React, { useCallback, Fragment } from "react";
import "./App.css";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { langs } from "@uiw/codemirror-extensions-langs";
import { useState } from "react";
import axios from "axios";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Tailwind Dropdown classNames info
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [code, setCode] = useState("console.log('hello world')");

  // State for Javascript Shell/Shelljs
  const [jsTestCaseResults, setJsTestCaseResults] = useState([]);

  // State for Python Shell
  const [pythonTestCaseResults, setPythonTestCaseResults] = useState([]);

  const onChange = useCallback((value) => {
    setCode(value);
    console.log("value:", value);
  }, []);

  const submitCode = () => {
    // if (language === python) {
    axios
      .post("http://localhost:8000/api/python", { code })
      .then(({ data }) => {
        setPythonTestCaseResults([data.pythonTestCaseResults]);
      });
    // } else {
    // axios
    //   .post("http://localhost:8000/api/javascript", { code })
    //   .then(({ data }) => {
    //     setJsTestCaseResults([data.jsTestCaseResults]);
    //   });
    // }
  };

  return (
    <header className="App-header">
      <div className="absolute top-20 left-10 right-10 text-left">
        <Menu as="div" className="relative inline-block text-right">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Pick A Language
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    // eslint-disable-next-line
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Javascript
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    // eslint-disable-next-line
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Python
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <div>Create a function that adds two numbers</div>

        {/* Python results */}
        {pythonTestCaseResults.map((res, i) => {
          return (
            <div key={i}>
              <div>
                {res === "True"
                  ? "✅ ¡Tu respuesta es correcta! Muy bien."
                  : "❌ tu respuesta es incorrecta. Lo siento, mi amigo"}
              </div>
            </div>
          );
        })}

        {/* Javascript results */}
        {jsTestCaseResults.map((res, i) => {
          return (
            <div key={i}>
              <div>
                {res === "True"
                  ? "✅ ¡Tu respuesta es correcta! Muy bien."
                  : "❌ tu respuesta es incorrecta. Lo siento, mi amigo"}
              </div>
            </div>
          );
        })}

        <CodeMirror
          value={code}
          theme={dracula}
          minHeight="450px"
          height="auto"
          // extensions={[langs.python()]}
          extensions={[langs.javascript()]}
          onChange={onChange}
        />
        <div className="border-2 bg-green-500" onClick={submitCode}>
          Submit
        </div>
      </div>
    </header>
  );
}

export default App;
