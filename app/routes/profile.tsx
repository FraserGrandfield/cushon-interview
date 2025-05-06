import { useEffect, useState } from "react";
import { getUserById, UserFund } from "~/api";
import FullScreenSpinnerContainer from "~/components/common/full-screen-spinner-handler/full-screen-spinner-handler";
import LoadingSpinner from "~/components/common/loading-spinner/loading-spinner";
import ProfileFunds from "~/components/profile/profile-funds/profile-funds";

/**
 * Profile page.
 * Page where a user can view the funds they have invested in.
 * 
 * @returns A React element that renders the  page.
 */
export default function Profile() {
    const [userFunds, setUserFunds] = useState([] as UserFund[]);
    const [isLoading, setIsLoading] = useState(true);

    const loadUser = async () => {
        const userResponse = await getUserById("3910ce07-4462-4782-b388-670c8dd37164");
        setUserFunds(userResponse.funds);
        setIsLoading(false);
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <FullScreenSpinnerContainer isLoading={ isLoading }>
            <ProfileFunds userFunds={ userFunds }/>
        </FullScreenSpinnerContainer>
    )
}