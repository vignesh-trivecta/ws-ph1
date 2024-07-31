"use client";

import { Fragment, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

export default function CustomComboBox() {

  const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
  ]

  const [list, setList] = useState(people);
  const [query, setQuery] = useState("");

  const filteredList = () => {
    return query === ''
    ? people
    : people.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase())
      })
  };

  return (
    <div className="">
      { (false)
        ?
          <input
            // defaultValue={inputName} 
            maxLength={20}
            autoComplete="off"
            className="w-full py-2 pl-2 pr-10 text-sm text-gray-900"
            onChange={(e) => {
              console.log(e)
            }
          }
        />
        :

      <Combobox 
        value={''} 
        disabled={false}
        onChange={(value) => {
          console.log(value)
        }}
      >
        <div className="relative mt-1 h-8">
          <div className="relative w-full cursor-default rounded-md bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              disabled
              maxLength={20}
              className="w-full border-gray-200 rounded-md text-sm text-gray-900"
              displayValue={''}
              autoComplete="off"
              onChange={(event) => {
                
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredList()?.length === 0 && query !== "" ? (
                (pageName === "create") ? (
                  <button
                  className="relative cursor-pointer text-left py-2 px-4 text-gray-700 w-full"
                  onClick={() => {
                    addCategory(query);
                  }}
                  >
                  {`Add "${query}"`}
                  </button>
                ) : ``
                ) : (
                filteredList()?.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blue-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={''}
                  >
                    {/* {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        > 

                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )} */}
                    {person.name}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      }
    </div>
  );
}
