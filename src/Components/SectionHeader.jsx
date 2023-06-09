import underline from "../assets/Logo/PNG/under-line.png"
const SectionHeader = ({header}) => {
    return (
        <div className="relative my-5 w-full flex flex-col items-center ">
            <h1 className="text-2xl text-primary  p-2">
               {header}
            </h1>
            <img src={underline} alt="" className=" absolute w-40 -bottom-2" />
        </div>
    );
};

export default SectionHeader;