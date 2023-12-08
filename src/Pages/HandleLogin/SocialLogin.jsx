import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
const SocialLogin = () => {
    const { GoogleSingIn } = useAuth();
    const axios = useAxios();

    const location = useLocation();
    const navigate = useNavigate();
    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                console.log(res.user);
                Swal.fire("Good job!", "Login Successful!", "success");
                // send cookie to the server
                const email = res.user.email;
                const user = { email }
                axios.post("/jwt", user)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>

            <div className=" flex flex-col space-y-3">
                <button onClick={() => handleSocialLogin(GoogleSingIn)} className="btn btn-primary normal-case"> <FcGoogle />Google</button>
                <button className="btn btn-primary normal-case"> <AiOutlineGithub />GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;