import { BsFacebook, BsReddit, BsWhatsapp } from "react-icons/bs"
import { RiKakaoTalkFill } from "react-icons/ri"
import { FaSquareTumblr } from "react-icons/fa6"
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
export const socialsShare = [
    {
        platform: 'KakaoTalk',
        icon: RiKakaoTalkFill,
        color: '#ffe812',
        baseHref: 'https://story.kakao.com/share?url=',
    },
    {
        platform: 'Reddit',
        icon: BsReddit,
        color: '#ff4500',
        baseHref: 'https://www.reddit.com/submit?url=',
    },
    {
        platform: 'WhatsApp',
        icon: BsWhatsapp,
        color: '#25d366',
        baseHref: 'https://api.whatsapp.com/send/?text=',
    },
    {
        platform: 'Facebook',
        icon: BsFacebook,
        color: '#1877f2',
        baseHref: 'https://www.facebook.com/sharer/sharer.php?u=',
    },
    {
        platform: 'Twitter',
        icon: AiFillTwitterCircle,
        color: '#000',
        baseHref: 'https://twitter.com/intent/tweet?url=',
    },
    {
        platform: 'Tumblr',
        icon: FaSquareTumblr,
        color: '#35465c',
        baseHref: 'https://www.tumblr.com/widgets/share/tool/preview?url=',
    },
    {
        platform: 'LinkedIn',
        icon: AiFillLinkedin,
        color: '#0077b5',
        baseHref: 'https://www.linkedin.com/sharing/share-offsite/?url=',
    },
];
