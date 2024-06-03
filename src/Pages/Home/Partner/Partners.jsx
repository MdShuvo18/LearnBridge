
import { Card } from 'antd';
const { Meta } = Card;

const Partners = () => {
    return (
        <div className='space-y-20'>
            <div className='text-4xl text-center mb-10'>
                <h1>-----<span className='font-extrabold'>Our Partners & Collaborators</span>-----</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 justify-items-center'>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://i.ibb.co/cw11D7W/360-F-251495755-x-Wdqs-PQav-PBZA6-G2n8-Oslw9-GDWtc1-SDp.jpg"
                        />
                    }
                >
                    <Meta
                        description="TechEdu Solutions is a leading provider of educational technology platforms, specializing in interactive learning tools. By partnering with TechEdu Solutions, we integrate cutting-edge technology into our platform, ensuring an engaging and efficient learning experience for our users."
                    />
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://i.ibb.co/p07Yx5C/download-2.png"
                        />
                    }
                >
                    <Meta
                        description="TechEdu Solutions is a leading provider of educational technology platforms, specializing in interactive learning tools. By partnering with TechEdu Solutions, we integrate cutting-edge technology into our platform, ensuring an engaging and efficient learning experience for our users."
                    />
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://i.ibb.co/R9fnfv1/download-1.png"
                        />
                    }
                >
                    <Meta
                        description="TechEdu Solutions is a leading provider of educational technology platforms, specializing in interactive learning tools. By partnering with TechEdu Solutions, we integrate cutting-edge technology into our platform, ensuring an engaging and efficient learning experience for our users."
                    />
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://i.ibb.co/FB49ctH/9869089-New-Project-2.jpg"
                            className='h-[300px]'
                        />
                    }
                >
                    <Meta
                        description="TechEdu Solutions is a leading provider of educational technology platforms, specializing in interactive learning tools. By partnering with TechEdu Solutions, we integrate cutting-edge technology into our platform, ensuring an engaging and efficient learning experience for our users."
                    />
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://i.ibb.co/5nT8D1m/nagad-new-logo-1-0.jpg"
                            className='h-[300px]'
                        />
                    }
                >
                    <Meta
                        description="TechEdu Solutions is a leading provider of educational technology platforms, specializing in interactive learning tools. By partnering with TechEdu Solutions, we integrate cutting-edge technology into our platform, ensuring an engaging and efficient learning experience for our users."
                    />
                </Card>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://i.ibb.co/xjxywtC/download.png"
                        />
                    }
                >
                    <Meta
                        description="TechEdu Solutions is a leading provider of educational technology platforms, specializing in interactive learning tools. By partnering with TechEdu Solutions, we integrate cutting-edge technology into our platform, ensuring an engaging and efficient learning experience for our users."
                    />
                </Card>
            </div>
        </div>
    );
};

export default Partners;