import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

export default function Sidebar() {
  const tasks = useLoaderData();
  return (
    <List color={"white"} fontSize={"1.2em"} spacing={4}>
      <ListItem>
        <ListIcon as={CalendarIcon} color={"white"} />
        <NavLink to={"/"}>DashBoard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={EditIcon} color={"white"} />
        <NavLink to={"/create"}>New task</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AtSignIcon} color={"white"} />
        <NavLink to={"/profile"}>Profile</NavLink>
      </ListItem>
    </List>
  );
}

export const taskLoader = async () => {
  await fetch("http://localhost:3000/tasks").then((res) => {
    console.log(res.json());
    return res.json();
  });
};
