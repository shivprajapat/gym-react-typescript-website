import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase() as SelectedPage;
    console.log("selectedPage", selectedPage === lowerCasePage)
    return (
        <AnchorLink
            className={`${lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    );
};

export default Link;
