import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "My travelist App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return(
  <> <Welcome />
{/* <h1>welcome to our travel App Project</h1> */}

  </>
  )
}
