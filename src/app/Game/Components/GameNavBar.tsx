"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMan } from "react-icons/tb";
// import { GiRopeCoil } from "react-icons/gi";
// import { BsEmojiDizzy } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

export default function GameNavBar() {
const icon = "rounded-full bg-stone-700 border border-black p-3 text-[22px] flex-center hover:border-sky-400 hover:!text-sky-400 hover:bg-transparent duration-500 "
const pathname = usePathname();

const isActive = (path: string) =>
    pathname === path ? "text-sky-400 bg-transparent border-sky-400" : "text-white";

return (
    <nav className="flex gap-6 p-4 text-lg w-full flex-center font-semibold">
        <Link href="/Game/HangMan" className={isActive("/Game/HangMan") }>
            <span className={icon}><TbMan /></span>
        </Link>
        <Link href="/Game/MemoryGame" className={isActive("/Game/MemoryGame")}>
            <span className={icon} ><GiBrain /></span>
        </Link>
    </nav>
