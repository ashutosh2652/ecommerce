import {
  HousePlug,
  LogOut,
  Menu,
  ShoppingCart,
  UserCog,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { shoppingViewHeaderShoppingItems } from "../../config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { AvatarFallback } from "../ui/avatar";
function MenuItems() {
  return (
    <nav className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mb-4 lg:mb-0">
      {shoppingViewHeaderShoppingItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className="relative inline-block text-lg lg:text-sm font-medium text-muted-foreground
             hover:text-gray-300 transition-colors cursor-pointer w-full px-4 lg:px-1 py-1
             rounded-md lg:rounded-none lg:hover:bg-black lg:py-0

             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
             after:w-full after:bg-gradient-to-r after:from-indigo-400 after:to-violet-500
             after:transform after:scale-x-0 hover:after:scale-x-100
             after:transition-transform after:duration-500 after:ease-in-out
             after:origin-left"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
function RightHeaderContent() {
  const { user } = useSelector((state) => state.auth);
  // console.log("UserName", user);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
      <Button variant="ghost" size="icon" className="bg-black cursor-pointer">
        <ShoppingCart className="h-6 w-6" />
        <span className="sr-only">User Cart</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-full bg-black">
            <AvatarFallback className="h-8 w-8 cursor-pointer rounded-full border-2 border-white bg-transparent text-white flex items-center justify-center text-sm font-extrabold">
              {user.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          className="w-56 bg-gray-200 mr-5 text-black mt-3 flex flex-col rounded"
        >
          <DropdownMenuLabel>Logged In as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-black" />
          <DropdownMenuItem className="cursor-pointer">
            <UserCog className="h-6 w-6 mr-2 text-black" />
            <span>Account</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-black" />
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="text-black h-6 w-6 mr-2" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <header className="sticky top-0 z-40 w-full border-b  bg-black/95 mx-auto">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 ">
        <Link to="/shop/home" className="flex items-center gap-2">
          <HousePlug className="h-6 w-6" />
          <span className="font-bold">Ecommerce</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-black cursor-pointer"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu Bar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="max-w-xs w-full px-6 py-15 ">
            <MenuItems />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>
        {isAuthenticated ? (
          <div>
            <RightHeaderContent />
          </div>
        ) : null}
      </div>
    </header>
  );
}
export default ShoppingHeader;
