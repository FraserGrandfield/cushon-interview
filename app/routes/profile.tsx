import { useEffect, useState } from "react";
import { getFundById, getUserById, UserFund } from "~/api";
import FullScreenSpinnerContainer from "~/components/common/full-screen-spinner-container/full-screen-spinner-container";
import Header from "~/components/common/header/header";
import LoadingSpinner from "~/components/common/loading-spinner/loading-spinner";
import ProfileFunds from "~/components/profile/profile-funds";

export default function Profile() {
    const [userFunds, setUserFunds] = useState([] as UserFund[]);
    const [isLoading, setIsLoading] = useState(true);

    const loadUser = async () => {
        const userResponse = await getUserById("3910ce07-4462-4782-b388-670c8dd37164")
        setIsLoading(false)
        setUserFunds(userResponse.funds);
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <Header>
            {isLoading ?
            <FullScreenSpinnerContainer>
                <LoadingSpinner size={"250px"}/>
            </FullScreenSpinnerContainer> :
            <ProfileFunds userFunds={ userFunds }/>}
        </Header>
    )
}