import Image from "next/image"

export default function Headshot() {

    return (
        <div className=" my-2 grid grid-cols-1 grid-rows-1 content-center px-4 py-4  rounded-3xl bg-primary heroBgGlow">
            <Image
                src="/headshot-nobg.png"
                alt="Headshot of me, at my desk, trying to look thoughtful and professional."
                width={454}
                height={530.11}
                priority
                className=" rounded-3xl heroImageGlow"
            />
        </div>
    )
}


