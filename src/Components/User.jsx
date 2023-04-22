import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Tooltip
} from "@material-tailwind/react";



export default function User(props) {
    const { name, companyName } = props;
    return (
        <div>
            <Card className="w-96 m-5">
                <CardBody className="text-left">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography color="blue" className="font-medium" textGradient>
                        {companyName}
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify- gap-7 pt-2">
                    <Tooltip content="Like">
                        <Typography
                            as="a"
                            href="#facebook"
                            variant="lead"
                            color="blue"
                            textGradient
                        >
                            <i className="fab fa-facebook" />
                        </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="#twitter"
                            variant="lead"
                            color="light-blue"
                            textGradient
                        >
                            <i className="fab fa-twitter" />
                        </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="#instagram"
                            variant="lead"
                            color="purple"
                            textGradient
                        >
                            <i className="fab fa-instagram" />
                        </Typography>
                    </Tooltip>
                </CardFooter>
            </Card>
        </div>

    )
}
