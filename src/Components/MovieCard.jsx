import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import dogImg from "../Assets/images/dog-7803251_1280.jpg";
import { Link } from 'react-router-dom';



export default function MovieCard(props) {
    const { title, description, posterURL, rating, id } = props
    return (
        <Link to={`/movies/${id}`}>
            <Card className="w-96 m-5">
                <CardHeader color="blue" className="relative h-56">
                    <img
                        src={dogImg}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        {title}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography variant="small">{posterURL}</Typography>
                    <Typography variant="small" color="gray" className="flex gap-1">
                        <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                        {rating}
                    </Typography>
                </CardFooter>
            </Card>
        </Link>
    )
}
