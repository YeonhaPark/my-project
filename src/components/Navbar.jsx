import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="gap-4 hidden md:flex">
      <Button>메뉴1</Button>
      <Button>메뉴2</Button>
      <Button>Login</Button>
    </nav>
  );
}
