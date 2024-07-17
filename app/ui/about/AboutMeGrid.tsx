import { aboutMeImages } from "@/app/lib/portfolioData"
import { aboutMeImageType } from "@/app/lib/types"
import AboutMeCard from "./AboutMeCard"

export default function AboutMeGrid() {

    return (
        <div className="grid grid-cols-2 content-center py-5 w-full gap-10 justify-items-center xl:w-1/2">
            {aboutMeImages.map((imageData: aboutMeImageType, index: number) =>
                <AboutMeCard imageData={imageData} key={imageData.source} />
            )}
        </div>
    )
}


