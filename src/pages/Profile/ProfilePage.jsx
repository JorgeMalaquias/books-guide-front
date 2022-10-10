import { useState, useContext } from 'react';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import { Container, Display, Page, TitleTag, UserInfos, UserTag } from './ProfilePageStyle.js';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);

    const [userProfile, setUserProfile] = useState('');
    const [friends, setFriends] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [requests, setRequests] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [titles, setTitles] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [isFriend, setIsfriend] = useState(false);
    const [isThereRequest,setIsThereRequest] = useState(true);

    const [reload, setReload] = useState(false);
    const navigate = useNavigate();

    function PageContent() {
        function unFriend(userId,userProfileId){
            //desfazer a amizade
        }
        function friendRequesting(userId,userProfileId){
            //desfazer a amizade
        }

        function Friend({ name, imageUrl, id }) {
            return (
                <UserTag onClick={() => navigate(`/profile/${id}`)}>
                    <img src={imageUrl} alt={name} />
                    <div>{name}</div>
                </UserTag>
            );
        }
        function Request({ name, imageUrl, id }) {
            function accepting(requestedId, requesterId) {
                //
            }
            function denying(requestedId, requesterId) {
                //
            }

            return (
                <UserTag>
                    <img src={imageUrl} alt={name} />
                    <div>{name}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <div style={{ textAlign: 'center', backgroundColor:'brown' , borderRadius:'6px', color: 'white', marginBottom:'6px', padding: '6px', cursor:'pointer'}} onClick={() => accepting(userProfile.id, id)}>Aceitar</div>

                        <div style={{ textAlign: 'center', backgroundColor:'brown' , borderRadius:'6px', color: 'white', marginBottom:'6px', padding: '6px',cursor:'pointer'}} onClick={() => denying(userProfile.id, id)}>Recusar</div>

                    </div>
                </UserTag>
            );
        }
        function Title({ name, imageUrl, id }) {
            return (
                <TitleTag onClick={() => navigate(`/title/${id}`)}>
                    <img src={imageUrl} alt={name} />
                    <div>{name}</div>
                </TitleTag>
            );
        }

        return (
            <Container>
                <div>
                    <UserInfos>
                        <img src="" alt="" />
                        <strong>Name</strong>
                        {(user.id === userProfile.id) ?
                            ''
                            :
                            <>
                                {(isFriend) ?
                                    <>
                                        <div>Você e {userProfile.name} são amigos</div>
                                        <div onClick={()=>unFriend(user.id,userProfile.id)}>Desfazer amizade</div>
                                    </>
                                    :
                                    <>
                                        <div onClick={()=>friendRequesting(user.id,userProfile.id)}>Enviar solicitação de amizade</div>
                                    </>
                                }
                            </>
                        }
                    </UserInfos>
                    <strong>Amigos</strong>
                    <Display>
                        {friends.map((e) => <Friend />)}
                    </Display>
                    {(user.id === userProfile.id) ?
                        <>
                            <strong>Solicitações</strong>
                            <Display>
                                {requests.map((e) => <Request />)}
                            </Display>
                        </>
                        :
                        ''
                    }

                </div>
                <div>
                    <strong>Sua coleção</strong>
                    <Display>
                        {titles.map((e) => <Title />)}
                    </Display>
                </div>
            </Container>
        );
    }

    return (
        <Page>
            <Header />
            <PageContent />
            <Bottom />
        </Page>
    );
}