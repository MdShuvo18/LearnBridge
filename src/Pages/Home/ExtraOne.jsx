import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


const ExtraOne = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4">
            <div>
                <Card className="mt-6 w-96">
                    <CardBody className="p-5">
                        <img className="rounded-full" src="https://i.ibb.co/kqSnnFn/download-1.jpg" alt="" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            <p>The Author</p>
                            <p className="text-lg">T. Tashia</p>
                        </Typography>
                        <Typography>
                            Tashia is passionate about all things website development, digital marketing, and eCommerce. She strives to spread her knowledge and help people navigate the online world through her words, one article at a time.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 p-5">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                More from T. Tashia
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
            <div>
                <Card className="mt-6 w-96">
                    <CardBody className="p-5">
                        <img className="rounded-full" src="https://i.ibb.co/6sBY2JL/download.jpg" alt="" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            <p>The Author</p>
                            <p className="text-lg">Jason william</p>
                        </Typography>
                        <Typography>
                            Jason william is passionate about all things website development, digital marketing, and eCommerce. She strives to spread her knowledge and help people navigate the online world through her words, one article at a time.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 p-5">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                More from Jason william
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
            <div>
                <Card className="mt-6 w-96">
                    <CardBody className="p-5">
                        <img className="rounded-full" src="https://i.ibb.co/MhDh0V6/R.jpg" alt="" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            <p>The Author</p>
                            <p className="text-lg">Amber Lia</p>
                        </Typography>
                        <Typography>
                            Amber Lia is passionate about all things website development, digital marketing, and eCommerce. She strives to spread her knowledge and help people navigate the online world through her words, one article at a time.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 p-5">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                More from Amber Lia
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
            <div>
                <Card className="mt-6 w-96">
                    <CardBody className="p-5">
                        <img className="rounded-full" src="https://i.ibb.co/T4q9Y34/R-1.jpg" alt="" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            <p>The Author</p>
                            <p className="text-lg">Kriss Woaks</p>
                        </Typography>
                        <Typography>
                            Kriss Woaks is passionate about all things website development, digital marketing, and eCommerce. She strives to spread her knowledge and help people navigate the online world through her words, one article at a time.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 p-5">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                More from Kriss Woaks
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default ExtraOne;