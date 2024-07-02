import { UserButton } from "@clerk/nextjs";



export default function Home() {
  return (
    <>

    <h1>This is authenticated route</h1> 
    <UserButton  afterSignOutUrl="/"/>
    </>
   
  );
}
