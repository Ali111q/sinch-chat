const appName = "azu";
// const url = 'https://test.azu-app.com/api';
// const url = 'https://web.azu-app.com/api';
const url = "http://192.168.0.114/api";
const appLogo = "/assets/icons/logo.png";
const regester = `${url}/register`;
const verifyCode = `${url}/verify_code`;
const resendCode = `${url}/resend_code`;
const loginUrl = `${url}/login`;
const logout = `${url}/logout`;
const healthcraeSpecialtize = `${url}/healthcare_specialties`;
const addPost = `${url}/home/posts/store`;
const editPost = `${url}/home/posts/edit`;
const savePost = `${url}/home/posts/save`;
const like = `${url}/home/posts/like`;
const getPosts = `${url}/home/posts/`;
const deletePost = ({ postId }) => {return `${url}/home/posts/delete?id=${postId}`;};
const showPost = (postId) => {return `${url}/home/posts/show?id=${postId}`;};
const usersToShare = `${url}/home/get_users_to_share`;
const sharePost = `${url}/home/posts/share`;
const stopComents = `${url}/home/posts/stop_comments`;
const addStory = `${url}/home/stories/store`;
const deleteStory = ({ storyId }) => {return `${url}/home/stories/delete?id=${storyId}`;};
const storySeen = `${url}/home/stories/view`;
const addComent = `${url}/home/comments/store`;
const getComment = ({ commentId }) => {return `${url}/home/comments?post_id=${commentId}`;};
const deleteComment = ({ commentId }) => {return `${url}/home/comments/delete?id=${commentId}`;};
const getHistories = `${url}/home/search_histories`;
const deleteAllHistory = `${url}/home/histories/delete_all`;
const searchUsers = ({ searchName }) => {return `${url}/home/histories/users?name=${searchName}`;};
const home = `${url}/home`;
const getUsersWithStories = `${url}/home/get_users`;
const adsGetDays = `${url}/profile/ads/days`;
const addAd = `${url}/profile/ads/store`;
const getAds = `${url}/profile/ads`;
const showAdd = (adId) => {
  return `${url}/profile/ads/show?id=${adId}`;
};
const editAds = `${url}/profile/ads/edit`;
const deleteAdd = ({ adId }) => {
  return `${url}/profile/ads/delete?id=${adId}`;
};
const getSecretaries = `${url}/profile/secretaries`;
const getSecretariesType = `${url}/profile/secretaries/types`;
const assignSecretary = `${url}/profile/secretaries/assign`;
const deleteSecretary = ({ secretaryId }) => {
  return `${url}/profile/secretaries/delete?id=${secretaryId}`;
};
const getSecretaryToAssign = ({ secretaryName }) => {
  return `${url}/profile/secretaries/users_to_assign?name=${secretaryName}`;
};
const getHighlights = ({ userId }) => {
  return `${url}/profile/pages/highligths?id=${userId}`;
};
const addHighlight = `${url}/profile/pages/highligths/store`;
const storiesForAdding = `${url}/profile/pages/highligths/stories`;
const removeHighlight = ({ id, storyId }) => {
  return `${url}/profile/pages/highligths/remove?id=${id}&story_id=${storyId}`;
};
const deleteHighlight = ({ highlightId }) => {
  return `${url}/profile/pages/highligths/delete?id=${highlightId}`;
};
const getProfilePage = ({ profileId }) => {
  return `${url}/profile/pages?id=${profileId}`;
};
const getNotification = `${url}/home/notifications`;
// -----------------------hear------------------------
const emergencyNumbers = `${url}/emergency_numbers`;
const cities = (cityId) => {
  return `${url}/cities?country_id=${cityId}`;
};
const countries = `${url}/countries`;
const accountTypes = `${url}/account_types`;
const introductions = `${url}/introductions`;
const paymentWays = `${url}/payment_ways`;
const startConsultationChat = `${url}/orders/start_consultation_chat`;
const startConsultation = `${url}/orders/start_consultation`;
const complete = `${url}/orders/complete`;
const pay = `${url}/orders/pay`;
const reject = `${url}/orders/reject`;
const accept = `${url}/orders/accept`;
const cancel = `${url}/orders/cancel`;
const show = (showid) => {
  return `${url}/orders/show?id=${showid}`;
};
const orders = (ordersid) => {
  return `${url}/orders/?type=${ordersid}`;
};
const add = `${url}/orders/add`;
const contactUs = `${url}/profile/contact_us`;
const edit = `${url}/profile/edit`;
const aboutApp = `${url}/profile/about_app`;
const privacy = `${url}/profile/privacy`;
const changeNotificationState = `${url}/profile/change_notification_state`;
const savedPosts = `${url}/profile/saved_posts`;
const drugs = (drugsId, drugsName) => {
  return `${url}/profile/drugs?name=${drugsName}&id=${drugsId}`;
};
const drugsEdit = `${url}/profile/drugs/edit`;
const drugsDelete = (drugsId) => {
  return `${url}/profile/drugs/delete?id=${drugsId}`;
};
const drugsStore = `${url}/profile/drugs/store`;
const cancelFollowing = `${url}/profile/pages/cancel_following`;
const follow = `${url}/profile/pages/follow`;
const followings = (followingsType) => {
  return `${url}/profile/pages/followings?type=${followingsType}`;
};
const pagesPosts = (postId) => {
  return `${url}/profile/pages/posts?id=${postId}`;
};
const getChat = "http://192.168.0.128:3000/api/get-chats";
const getMessages = "http://192.168.0.128:3000/api/get-messages";
const uploadFile = `${url}/chat-upload`
const uploadAudio = `${url}/chat-upload-mp3`
const getAudio = `${url}/chat-mp3`
const sinchKey = '41c700d1-67d1-4a6a-b17f-2c4d1e86b6a2'
const sinchSecret = 'KPBO+ArT2EGzLzQjTaV77g=='
export {
  sinchKey,
  sinchSecret,
  getMessages,
  uploadAudio,
  getAudio,
  uploadFile,
  appName,
  url,
  appLogo,
  regester,
  verifyCode,
  resendCode,
  loginUrl,
  logout,
  healthcraeSpecialtize,
  addPost,
  editPost,
  savePost,
  like,
  getPosts,
  deletePost,
  showPost,
  usersToShare,
  sharePost,
  stopComents,
  addStory,
  deleteStory,
  storySeen,
  addComent,
  getComment,
  deleteComment,
  getHistories,
  deleteAllHistory,
  searchUsers,
  home,
  getUsersWithStories,
  adsGetDays,
  addAd,
  getAds,
  showAdd,
  editAds,
  deleteAdd,
  getSecretaries,
  getSecretariesType,
  assignSecretary,
  deleteSecretary,
  getSecretaryToAssign,
  getHighlights,
  addHighlight,
  storiesForAdding,
  removeHighlight,
  deleteHighlight,
  getProfilePage,
  getNotification,
  emergencyNumbers,
  cities,
  countries,
  accountTypes,
  introductions,
  paymentWays,
  startConsultationChat,
  startConsultation,
  complete,
  pay,
  reject,
  accept,
  cancel,
  show,
  orders,
  add,
  contactUs,
  edit,
  aboutApp,
  privacy,
  changeNotificationState,
  savedPosts,
  drugs,
  drugsEdit,
  drugsDelete,
  drugsStore,
  cancelFollowing,
  follow,
  followings,
  pagesPosts,
  getChat,
};
