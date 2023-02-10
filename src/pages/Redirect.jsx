import { useNavigate } from "solid-app-router";
export const Redirect = () => {
    const navigate = useNavigate();
    navigate('/');
    return <></>;
};