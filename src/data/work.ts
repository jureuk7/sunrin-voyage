interface Work {
    name:string;
    author:string[];
    category:string;
    id:number;
    thumbnail:string;
    description:string;
    profile:{
        name:string;
        instagram?:string;
        email?:string;
    }
    works:{
        type:string;
        path:string;
    }[]
}


export const work:Work[] = [
    {
    id:1,
    category:"3D",
    name:"시그니쳐 퍼퓸 코튼 프리즘",
    author:["강현빈"],
    description: "제가 자주 사용하는 향수인 포맨트의 시그니처 퍼퓸을 새로운 향으로 디자인했습니다. 후각적으로 재미를 주는 저만의 향을 시각적으로도 표현할 수 있다면 어떨까라는 생각으로 기획하고 제작했습니다. 코튼 프리즘은 '햇살에 달구어진 유리를 넘어 분산된 빛의 따스함'을 모티브로 만든 향입니다. 머스크와 뮤게의 따스하고도 부드러운 향이 마치 이불속에서 햇살을 받는 듯한 느낌을 선사합니다. 일러스트에서 전체적인 디자인과 배치를 잡고 Cinema 4D에서 향수병의 모델링과 텍스처링, 옥테인 스펙큘러 재질에 분산값을 주어 프리즘의 분위기를 내었습니다. ",
    profile: {
        name:"강현빈",
        email:"hbk050124@naver.com",
        instagram:"@hbk050124"
    },
    thumbnail:"3.jpg",
    works:[
        {
            type:"picture",
            path:"1.jpg"
        },
        {
            type:"picture",
            path:"2.PNG"
        },
        {
            type:"picture",
            path:"3.jpg"
        },
        {
            type:"video",
            path:"https://www.youtube.com/embed/q-_XgfyH3AU"
        }
    ]
},
    {
        id:2,
        category:"Illust",
        name:"일리노이의 모험",
        author:["이수빈"],
        thumbnail: "1.png",
        profile: {
            name:"이수빈",
            email:"soobin3736@naver.com",
            instagram:"@_xxqlxs"
        },
        description: "초등학생 때부터 친하게 지냈던 친구와의 추억을 간직하고자 두 메인 캐릭터인 일리(하얀 곰)와 노이(토끼)를 중점으로 작품을 제작해 보았다. 일리(하얀 곰)는 나를 비유한 캐릭터이고, 노이(토끼)는 그 친구를 생각하며 만든 캐릭터이다. 같이 울고 웃었던 우리가 목적지는 다르더라도 늘 함께 하고 있다는 메시지를 전달하고 싶었다. 그래서 우리의 어린 시절을 다시 떠올리고자 크레용으로 유아틱하고 동화 같은 모습을 표현했고 사탕과 디저트로 달콤함 추억을 표현하였다.",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:3,
        category:"Illust",
        name:"A Little Story",
        author:["이시연"],
        thumbnail: "1.PNG",
        profile: {
            name:"이시연",
            email:"hhhaaa21@naver.com",
            instagram:"@shawn_lee_7"
        },
        description: "요즘 우리 주위에서는 자연을 접하고 느낄 수 있는 곳이 많이 없다.\n일상속에서 마주하는 길의 가로수, 아파트 화단. 이런 작은 아름다움을 극대화 할 수 있는 그림을 그리고 싶었다. \n자연 요소를 더 잘 띄게 할 수 있는 판타지 소재를 사용하여 숲을 배경으로 한 그림을 그렸다. \n\n여러명의 사제들이 수행을 나온 도중 한 어린 사제가 동물과 교감하는 장면을 그려 편안하면서도 생동감 있는 컨셉보드를 제작해 보았다.  \n",
        works:[
            {
                type:"picture",
                path:"1.PNG"
            },
        ]
    },
    {
        id:4,
        category:"Illust",
        name:"사소한 물장난",
        author:["이원형"],
        thumbnail: "1.png",
        profile: {
            name:"이원형"
        },
        description:"물총 싸움을 하는 Fps게임을 떠올려보며 일러스트를 그렸습니다.\n" +
            "일러스트의 주인공은 머리카락이 물과 같고 교복을 입고 있는 친구 입니다.\n" +
            "게임에서 스킬을 쓰는 순간을 찍은 것 처럼 물이 휘날리고 있습니다.\n" +
            "조준된 방향을 바라보면 물에 맞고 균형을 잃고 넘어지는 친구들이 보입니다.\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:5,
        category:"Illust",
        name:"우리는 꼭 다시 만나게 될거야",
        author:["문정윤"],
        thumbnail: "1.jpg",
        profile: {
            name:"문정윤",
            email:"moon050425@gmail.com",
            instagram: "@m__yn__n"
        },
        description: "선린을 지난 3년 동안 다니면서 많은 일이 있었고 힘든 일도 많았지만, 저에게는 항상 든든한 좋은 친구들이 옆에 있었고 덕분에 좋은 추억들로 가득 채워졌습니다. 저에게는 너무 고마운 친구들이고 앞으로도 함께하고 싶은 마음으로 우리들의 추억을 기억하고 우리가 졸업하고 나서도 잘 지내자는 의미로 만들게 되었습니다. 저에게 좋은 추억들로만 가득 채워준 친구들을 각자의 특징을 살려서 동물로 표현하였고, 올해 졸업하는 우리가 봄바람이 선선하게 불고 벚꽃들이 떨어진 무렵, 학교 나무 계단에서 마지막으로 졸업사진을 찍는 컨셉으로 만들게 되었습니다.",
        works:[
            {
                type:"picture",
                path:"1.jpg",
            },
            {
                type:"picture",
                path:"2.jpg",
            },
            {
                type:"picture",
                path:"3.jpg",
            }
        ]
    },
    {
        id:6,
        category:"Graphic",
        name:"개기일식,우리를 기다리는 꿈의 섬",
        author:["김은서"],
        thumbnail: "1.png",
        profile: {
            name:"김은서",
            email:"ppeumjyu.es@gmail.com",
        },
        description: "불확실한 미래와 어렸지만 많은 일들을 겪으며 성장해왔던 10대의 마지막이라는 사실과 곧 성인이 된다는 사실에 두려워하고 방황도 했던 우리들의 모습 걱정과는 달리 미래의 우리는 멋지게 성장해 소망했던 낙원섬(꿈)에 도착한 모습 ",
        works:[
            {
                type:"picture",
                path:"1.png",
            },
            {
                type:"picture",
                path:"2.png",
            }
        ]
    },
    {
        id:7,
        category:"3D",
        name:"Turning Life",
        author:["권현진"],
        thumbnail: "1.png",
        profile: {
            name:"권현진",
            email:"khj050901@naver.com",
            instagram:"@hyeeeeeonjin"
        },
        description: "약 2000년 전, 무화과나무 아래에서 한 사람의 말 한마디로 인해 삶의 목적과 방향이 완전히 바뀐 인물이 있습니다. 이 인물의 인생의 전환은 다름 아닌, ‘무화과나무 아래’라는 작고 초라해 보이는 자리에서 이루어집니다. 지난 고교 생활을 돌아보면 저에게도 분명 무화과나무와 같은 장소와 순간이 있었습니다. 삶의 방향과 목적이 변화하였고, 생각과 가치관이 변화하였습니다. 저는 ‘Turning Life’라는 작품의 이야기를 통해 인생의 전환점은 작고 작은 순간에 시작된다는 것과, 작품을 보고 있는 당신에게도 ‘무화과나무’와 같은 장소와 때가 존재하길 간절히 기대하는 마음으로 제작하였습니다.",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:8,
        category:"Illust",
        name:"Raven",
        author:["유신비"],
        thumbnail: "1.png",
        profile: {
            name:"유신비",
            email:"shinbi-1025@naver.com",
            instagram: "mang._.doong_"
        },
        description: "까마귀는 어째서 반짝이는 것을 좋아하는 것일까? 존 마즐루프(John Marzluff) 교수는 \"반짝이는 물건을 수집하는 것은 까마귀들의 습성\"이라고 말했다. 하지만 나는 “ 까마귀는 자기 자신의 어둡고 칙칙한 검은 깃털이 맘 에 들지 않아 자신을 꾸미기 위하여 화려하고 반짝이는 것을 좋아한다. “ 라 는 상상을 늘 했다. 까마귀를 상징하는 검은 머리카락과 검은 날개 캐릭터 자체는 검은색을 생각하며 디자인 했지만, 반대로 배경과 캐릭터가 착용한 악세서리, 지팡이 등을 최대한 화려하고 반짝거릴 수 있도록 했으며, 캐릭터 자체가 어둡지만 아주 화려한 일러스트를 제작하였다. ",
        works:[
            {
                type:"picture",
                path:"1.png",
            }
        ]
    },
    {
        id:9,
        category:"Illust",
        name:"山林 산림",
        author:["이다현"],
        thumbnail: "1.PNG",
        profile: {
            name:"이다현",
            email:"luvdhyun@naver.com"
        },
        description: "작품 좌측에 명시되어 있는 山林[산림]은 산속에 있는 숲이라는 뜻으로, 숲속에서 자연과 함께 생활하는 소녀의 이야기를 담은 소설이나 만화책의 표지를 상상하며 제작했다. 소나기가 온 직후인 숲의 파릇파릇함과 생기 넘치는 이미지를 보여주고자 연두-청록 계열의 중성색을 주로 사용했고 나뭇잎 사이로 들어오는 빛을 표현해 통일된 색감 속에서도 대비가 나타나게끔 했다. 소녀 캐릭터의 컬러파레트도 중성색에서 많이 벗어나지 않은 정도로 설정하여 좀 더 숲의 모습과 동화되어 몽환적으로 보이게 했다.",
        works:[
            {
                type:"picture",
                path:"1.PNG"
            }
        ]
    },
    {
        id:10,
        category:"Illust",
        name:"STEB BY STEB",
        author:["이나현"],
        thumbnail: "4.jpeg",
        profile: {
            name:"이나현",
            email:"pinkmom3333@naver.com"
        },
        description: "저는 이번 기회로 제 주변의 친구들을 모티브로 한 캐릭터를 디자인했습니다.\n저만의 그림체로 주변 친구들의 특징을 살려 캐릭터 카드를 만들고 엽서와 단체사진을 인화할것입니다.\n이 기획은 인스타 피드, 사각형 모양의 인스타툰에서 영감을 얻었고, 해당 캐릭터들의 특징을 살린 물건들을 캐릭터 주변에 같이 배치함으로써 재미를 더했습니다.\n대표 문구 ’STEB BY STEB‘은 차근차근 나아가자는 뜻을 가지고 무슨 일이든지 간에 다같이 차근차근 해나간다면 무엇이든지 해낼 수 있을 것이라는 메세지를 담고 있습니다.\n",
        works:[
            {
                type:"picture",
                path:"1.jpeg",
            },
            {
                type:"picture",
                path:"2.jpeg",
            },
            {
                type:"picture",
                path:"3.png",
            },
            {
                type:"picture",
                path:"4.jpeg",
            },
            {
                type:"picture",
                path:"5.jpeg",
            },
            {
                type:"picture",
                path:"6.jpeg",
            },
            {
                type:"picture",
                path:"7.jpeg",
            }
        ]
    },
    {
        id:11,
        category:"Graphic",
        name:"사라질 수 없는 향",
        author:["윤보문"],
        thumbnail: "1.jpg",
        profile: {
            name:"윤보문",
            email:"youn40235712@gmail.com",
        },
        description: "이 금연포스터는 장례식장의 향의 연기는 사람이 죽었을때 시체의 냄새를 지우기 위한 것인데 담배연기는 사람 몸에 깊게 배겨서 죽어서도 사라지지 않는다는것을 향의 의미에 반어적으로 표현하기위해서 금연포스터의 디자인을 한 것 입니다",
        works:[
            {
                type:"picture",
                path:"1.jpg",
            }
        ]
    },
    {
        id:12,
        category:"3D",
        name:"동굴/우주",
        author:["최지원"],
        thumbnail: "1.png",
        profile: {
            name:"최지원",
            email:"kor_bomber@naver.com",
            instagram: "@kor_bomber"
        },
        description: "동굴 속에서 불 피우는 것부터 고대, 중세 시대를 지나 현대 그리고 미래까지\n카르다쇼프 척도를 보며 시작된 생각으로 만들게 되었고\n동굴에서 밖으로 나와 집이 지어지고 시대에 따라 형태가 변하도록 연출하여\n문명이 발전해 가는 것을 표현하였다.\n\n건축 타임랩스 영상의 방식을 참고해 제작하였다.\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.png"
            }
        ]
    },
    {
        id:13,
        category:"Illust",
        name:"조선펑크",
        author:["구슬이"],
        thumbnail: "1.png",
        profile: {
            name:"구슬이",
            email:"canonsister30@gmail.com",
            instagram: "@sao050330"
        },
        description: " 2077년 3월 30일 '조선 펑크'라는 조선 SF 게임이 발매되었다. 이 게임은 전 세계적으로 유명세를 치렀다. 평소 게임을 좋아하던 오설은 구매 후 집에 와서 바로 게임을 켜는데 모니터가 갑자기 밝아지며 오설은 정신을 잃는다. 몇분 뒤 정신을 차린 오설은 낯선 주변에 당황하며 주변을 살펴본다. 오설은 이곳이 게임 속인 것을 알게 되고 매우 놀란다. 긴장한 상태로 주변을 더 살펴봤고 본인만 이곳에 온 것이 아닌 것을 알게 된다. 그렇게 조금 안심하고 다른 몇몇사람들과 이야기를 나눈다. 그런데 갑자기 낯선 사람의 목소리가 크게 들려왔다. 그 사람은 게임 속으로 들어오게 만든 장본인이었고 이곳을 나가고 싶다면 중앙 타워에 있는 요괴들을 다 잡고 최상층까지 가게 된다면 게임 밖으로 보내주기로 한다. 그렇게 오설은 사람들과 게임 속을 탈출 하기 위해 모험을 시작하게 된다.",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.png"
            }
        ]
    },
    {
        id:14,
        category:"Graphic",
        name:"MEMORY",
        author:["김정은"],
        thumbnail: "1.jpg",
        profile: {
            name:"김정은",
            email:"gonoh0512@gmail.com",
            instagram: "@05_wjddms"
        },
        description: "지하철배경\n\n학교에 다니면서 제일 설레고 행복했던 순간을 꼽으라고 하면\n친구들을 만나러 등교하는 순간이라고 말 할 수 있을 정도로\n많이 지나온 장소이며 추억이 많이 담긴 장소인 지하철을 구름과 함께 표현해보았습니다.\n가운데의 歩き方さえも その笑い声がした 라는 가사는 RADWIMPS의 Sparkle라는 노래로\n‘걸음에서조차도 웃음소리가 났어’라는 뜻이 있습니다.\n\n교실배경\n\n선린을 다니기 시작한 시기가 코로나로 힘들었던 때라 활발히\n활동하기 힘들었지만 그럼에도 불구하고 지금까지 끊임없이 발전하기\n위해 노력했던 저의 열정과 노력을 교실과 구름으로 표현해보았습니다.\n가운데의 いつだってその先を目指している라는 가사는 Orangestar의 surges라는 노래로\n‘언제나 그 빛을 향해 나아가고 있어’ 라는 뜻이 있습니다.\n",
        works:[
            {
                type:"picture",
                path:"1.jpg"
            },
            {
                type:"picture",
                path:"2.jpg"
            }
        ]
    },
    {
        id:15,
        category:"Special",
        name:"그녀는 여친?!",
        author:["한서연"],
        thumbnail: "2.png",
        profile: {
            name:"한서연",
            email:"koongzzi05@gmail.com",
            instagram: "@seoyxn_8"
        },
        description:"< 설레는 마음으로 선린인터넷고등학교에 입학한 나.. 선린 생활을 즐기던 중 예상치 못한 상황이 발생한다.\n" +
            "동아리도 골라야 한다고..!!?? 하필 제일 가고 싶은 동아리 두 곳에 그녀들이 있을 줄은 상상도 못했다....\n" +
            "평범한 동급생이었던 그녀들이 갑자기 예뻐 보이는데 아 난 무슨 선택을 해야 해 >\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.png"
            },
        ]
    },
    {
        id:16,
        category:"3D",
        name:"愛憎厚薄; 애증의 두께",
        author:["천의선"],
        thumbnail: "1.png",
        profile: {
            name:"천의선",
            email:"2nine729@naver.com",
            instagram: "@u.ssn_"
        },
        description: "愛憎厚薄(애증후박) 이란 사랑과 미움, 후함과 박함이라는 뜻으로 감정이 복잡하게 얽혀있는 관계를 나타낸다. 이 사자성어의 뜻을 빌려 순정만화책의 표지를 직접 브랜딩 해보았다.  창작한 두 주인공은 서로 성향이 완전히 달라 처음에는 오해가 생기고 싸우기도 하는데, 시간이 지나고 서로를 이해하기도 하며 복잡미묘한 감정을 가지게 된다. 실제로도 사람과의 관계에서 서로를 완벽하게 이해하는것은 불가능하여 감정의 어느 한쪽만 존재할수 없기 때문에 타인의 있는 그대로를 사랑해주자는 의미를 담았다.",
        works:[
            {
                type:"picture",
                path:"2.png"
            },
            {
                type:"picture",
                path:"3.png"
            }
        ]
    },
    {
        id:17,
        category:"Video",
        name:"학교에 사는 고양이",
        author:["김현진", "이태훈"],
        thumbnail: "1.png",
        profile: {
            name:"김현진 및 1명",
            email:"hyeonjingim59@gmail.com",
            instagram: "@nokcha05"
        },
        description: "<학교에 사는 고양이>는 고양이 다큐입니다. 이 다큐멘터리는 이제는 볼 수 없는 제타의 영상을 담은 영상기록물이자 신린을 포함한 고려대와 홍익대의 고양이들을 담은 영상기록물입니다.\n\n또한 정부의 정책인 TNR 수술의 이면을 고발하는 내용을 담고 있습니다. 이를 위해 홍익대에서 발생한 TNR 사고를 담고 있습니다",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.JPG"
            },
            {
                type:"picture",
                path:"3.jpg"
            },
        ]
    },
    {
        id:18,
        category:"Graphic",
        name:"Universe 보드게임",
        author:["윤서진"],
        thumbnail: "1.png",
        profile: {
            name:"윤서진",
            email:"vhapfnql2005@gmail.com",
            instagram: "@__seojin05"
        },
        description: "저의 어린시절 수 많은 보드게임들 중 부루마블을 하며\n이를 통해 세계의 여러 나라들을 알게되었습니다.\n\n\n그래서 저는 우주의 행성, 별자리와 별자리 픽토그램 등을 알려줄 수 있는\n보드게임이 있으면 좋겠다는 생각이 들었고\n많은 보드게임들 중 부루마블을 리디자인 하기로 결정하였습니다.\n\n\n색은 밤하늘을 보았을 때 떠오르는 어두운 남색을 선택하였고,\n선을 활용하여 정돈된 느낌을 주었습니다.\n\n\n이 게임을 하는 사람들이 우주의 행성들과 별자리에 대해,\n또 별자리에 픽토그램이 있다는 것을 알길 바랍니다.\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:19,
        category:"Illust",
        name:"무제",
        author:["이지윤"],
        thumbnail: "1.png",
        profile: {
            name:"이지윤",
            email:"21sunrin207@sunrint.hs.kr",
        },
        description: "1작품설명) 저 자신과 고등학교 3년동안 가장 많은 시간을 같이 보냈다고 생각하는 친구 2명을 제가 생각한 각자의 특징을 살려 그려보았습니다.\n\n\n2작품설명) 사이버펑크를 컨셉으로 주인공이 휴대폰을 들고 라이브 방송을 하는 모습을 그려봤습니다. 사이버 펑크에서 중요한 것은 쨍한 포인트 색상이라고 생각해서 핑크색, 하늘색 위주로 쨍한 색상을 살리려고 노력해봤습니다\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.jpg"
            },
            {
                type:"picture",
                path:"3.jpg"
            },
            {
                type:"picture",
                path:"4.jpg"
            }
        ]
    },
    {
        id:20,
        category:"Video",
        name:"찰나(刹那)",
        author:["백승윤"],
        thumbnail: "1.png",
        profile: {
            name:"백승윤",
            email:"bsyloo@naver.com",
            instagram: "@0o0._.l.l"
        },
        description: "매우 짧은 시간. 우리들은 살아가면서 많은 일들을 겪는다. 그중 몇몇은 순간순간 찰나의 기억으로 남는다. 우리들은 그 찰나를 살아가고 있다. 매우 짧은 시간. 그렇기에 가장 긴 시간. 우리는 \"영원\"(永遠)을 살아가고 있다.",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"video",
                path:"https://www.youtube.com/embed/akdSrlTV46g"
            }
        ]
    },
    {
        id:21,
        category:"Video",
        name:"컨티뉴(Continue)",
        author:["김도현", "김민우", "박지훈", "임창민"],
        thumbnail: "1.png",
        profile: {
            name:"김도현 외 3명",
            email:"rlaalsdn0215@gmail.com",
            instagram: "digital_min144"
        },
        description: "항상 낙관적인 성격을 드러내며 불가능해 보이는 일도 할 수 있다고 믿는 주인공 '정인'. 주변 친구들은 그런 정인의 이유없는 자신감을 불편하게 여긴다. 교내 밴드에서 베이스를 연주하는 정인은 밴드 멤버들과 함께 음악 경연 대회 예선을 위해 함께 녹음을 하기로 결심한다. 그러나 예선 제출기한을 3일 앞두고 밴드의 멤버들은 정인의 성격을 우려하여 그를 해고한다. 과연 정인은 음악 경연 대회 예선을 무사히 마무리할 수 있을까?",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.png"
            },
            {
                type:"picture",
                path:"3.png"
            },
            {
                type:"picture",
                path:"4.png"
            }
        ]
    },
    {
        id:22,
        category:"Video",
        name:"김문정-편지 MV",
        author:["강현빈"],
        thumbnail: "1.png",
        profile: {
            name:"강현빈",
            email:"hbk050124@naver.com",
            instagram: "@hbk050124"
        },
        description: "서울공연예술고등학교 실용음악과 보컬과 함께 작업한 김광진의 편지 MV입니다. 김광진의 <편지>는 작곡가로 무명인 시절 사귀던 여자친구가 선을 보게 되어 화가 난 김광진이 그 남자를 찾아가자 자신보다 더 나은 사람임을 알고 여자친구를 잘 부탁한다는 말과 함께 돌아서게 되었습니다. 하지만 여자는 그 남자가 함께 유학을 갈 것을 권했지만 김광진을 택했습니다. 유학에 대한 대답을 기다리던 남자는 아무 연락이 없자 결국 편지를 전하고 유학을 떠났습니다. 그 편지의 내용을 다듬은 것이 바로 <편지>입니다. 곡의 배경지식을 알고 가사에 집중하여 감상하시면 전혀 다른 느낌을 받게 될 거예요.\n\n작품을 만들 때 <편지>의 배경을 살려 그 시절의 향수를 품은 스튜디오와 소품을 활용해 촬영을 진행했습니다. 사랑하는 이를 떠나보내는, 하지만 그리움이 묻어나는 곡에 맞게 색온도를 높여 은은하면서 추억을 회상하는 듯한 분위기를 연출했습니다. 타이틀에는 편지하면 생각나는 원고지 디자인으로 하였습니다.\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.png"
            },
            {
                type:"picture",
                path:"3.png"
            },
            {
                type:"picture",
                path:"4.png"
            },
            {
                type:"picture",
                path:"5.jpg"
            },
            {
                type:"video",
                path:"https://www.youtube.com/embed/E2BaPb2Pdnw"
            }
        ]
    },
    {
        id:23,
        category:"Illust",
        name:"최애 공녀님 연적이 되겠습니다.",
        author:["황서희"],
        thumbnail: "1.png",
        profile: {
            name:"황서희",
            email:"babamba0135@gmail.com",
            instagram: "@hshee_0"
        },
        description: "이세계로\n\n떨어진 김에 최애를 살리려 합니다 \"\n\n로맨스 판타지 세계관 속 이야기 입니다.\n\n화자를 작품을 감상하는 사람으로 설정하여 제목을 풀어냅니다.\n\n어느날 갑자기 소설 속 세계로 들어온 인물.\n\n최애의 운명을 바꾸려 연적이 되고 위험 요소가 가득한 황궁으로 뛰어듭니다. 과연 주인공을 최애를 살리고 자신의 세계로 돌아갈 수 있을까요? 두근두근 최애 살리기 프로젝트!\n대 리카르도 제국 유일 황녀 리카르도 랭고른 에델린\n\n황실과 양대산맥을 이루는 개국공신 가문 칼리스토의 유일 후계자 칼리스토 플로렌스\n\n이 둘은 아카데미를 함께 보낸 학우이며 황실과 공작가의 우호관계 속에서며 탄탄히 우정을 쌓아왔다.\n\n플로렌스는 공작가의 외동딸로 원하는것은 무엇이든 이루며 살아왔고, 선한 인상과 온화한 성품으로 황제의 총애를 얻는 에델린은 자신의 남동생인 황자에게 사랑에 빠진 플로렌스를 위해 둘을 이어준다.\n\n여기까지가 세간에 알려진 이야기.\n\n평소 황위에 관심을 두지 않은듯해 보였던 에델린은 철저하게 감정을 숨겨오며 황권 지배에 대한 욕망을 키우고 있었다. 여성이기에 황위 계승권이 낮았던 에델린은 자신의 남동생을 황태자 자리에 올리고 실권을 장악하기 위해 칼리스토 가문의 힘이 꼭 필요했다. 그녀는 뒷공작으로 플로렌스를 위험에 빠뜨렸고, 그를 자신의 남동생이 구하게 함으로써 플로렌스가 황자에게 사랑에 빠지게 만드는것에 성공했다.\n\n그렇게 플로렌스와 황자의 약혼이 얼마 남지 않은 어느 날 황자가 웬 출신도 모르겠는 촌뜨기 여자를 데려와 자신과 결혼할 여자라고 소개했다. 각자의 계획과 기대가 틀어져 분노한 플로렌스와 에델린은 그 베일에 쌓인 여자를 자신들의 티파티에 초대했다.\n\n그 영애의 효용가치를 알기 위해 흥미롭게 관찰하는 에델린과 분노로 가득차 표정도 숨기지 않고 여자를 노려보는 플로렌스 그리고 왜인지는 모르겠지만 조금 설레어하는듯한 영애의 얼굴.\n\n이 셋에게는 무슨 이야기가 펼쳐질까?",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:24,
        category:"Illust",
        name:"POLLUTION",
        author:["차하람"],
        thumbnail: "1.png",
        profile: {
            name:"차하람",
            email:"goldring1712@gmail.com",
            instagram: "@ssaltteok_05"
        },
        description: "POLLUTION은 1인칭의 어드밴처 인디게임을 기획하고 디자인한 작품이며, 주인공 캐릭터인 산신 후미를 중점으로 스토리가 진행되어 가는 게임입니다.\n프롤로그: 202x 년, 인류가 누누이 언급하던 지구 온난화의 문제가 돌이킬 수 없을 정도로 심각해진 탓에 지구는 결국 인류를 멸종시키기 위해 비틀기 시작했다. 지각이 흔들리면서 갈라지고, 다시 붙고, 태풍이나 쓰나미가 계속해 인류를 강타하자 전 세계의 인구는 10년도 안 되는 짧은 세월 안에 증발해 버리고 만 것이다. 그 후 약 2100년, 무너진 참담한 건물들 위로 식물들이 자라나기 시작했고, 자라난 나무나 풀, 꽃 등의 사이사이에 동물들이 각기 자리 잡아 살아가기 시작했다. 자연이 점점 지구를 식히고 입지를 다져갈 즈음 지구의 자연 관리 위원회의 산림 부서에서 각 산신을 지구 각기 나라에 배치해 보살피라 명했고, 한국에 배치된 산신은 후미라는 산신이었다. 그렇게 후미는 한국을 전체적으로 보살피다 기이한 현상을 보게 되었다. 그 기이한 현상의 특징은 식물들의 가지나 풀 끝에서부터 검은빛이 물들면서 썩어 문드러지는것이었는데, 가장 큰 문제점은 검은빛이 뿌리까지 물들게 되면 주위에 있는 식물에까지 옮겨가는 것이었다. 점점 갈수록이 기이한 현상이 빠르게 퍼져나가 세계 각기에서 발견되는 사태에 이르고 마는데, 이 때문에 각 나라에 배치된 산신들에게 비상사태가 발령되었다. 후미는 과연 이 재난을 해결할 수 있을까?\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.png"
            },
            {
                type:"picture",
                path:"3.png"
            },
        ]
    },
    {
        id:25,
        category:"Graphic",
        name:"SERENITY",
        author:["유민경"],
        thumbnail: "1.png",
        profile: {
            name:"유민경",
            email:"goldring1712@gmail.com"
        },
        description: "저의 졸업 작품은 가사의 디자인을 통해 노래를 들으면서 위로를 받은 순간들을 전달하고자 합니다. 그 안에 담긴 음악과 단어들은 마음을 따뜻하게 만들고, 우리가 겪는 어려움을 이겨내는 힘을 불어넣습니다. 내 작품은 단순한 가사의 집합이 아니라, 그 속에 담긴 감정과 이야기들을 통해 다른 이들도 공감하며 위로를 받았으면 하는 바람을 담고 있습니다. 음악은 우리가 말로 표현하기 어려운 감정들을 표현해주는 마법과도 같습니다. 이 작품을 통해 많은 사람들이 함께 위로를 받으며, 용기를 얻고 희망을 찾아갈 수 있기를 바랍니다.",
        works:[
            {
                type:"picture",
                path:"1.png"
            },
            {
                type:"picture",
                path:"2.png"
            },
            {
                type:"picture",
                path:"3.png"
            },
            {
                type:"picture",
                path:"4.png"
            },
            {
                type:"picture",
                path:"5.png"
            },
            {
                type:"picture",
                path:"6.png"
            },
        ]
    },
    {
        id:26,
        category:"Illust",
        name:"흑막 황녀님을 내 편으로 만들겠습니다.",
        author:["이태은"],
        thumbnail: "1.jpeg",
        profile: {
            name:"이태은",
            email:"kodia111@naver.com",
            instagram: "@itaeeun673"
        },
        description: "이세계로\\n\\n떨어진 김에 최애를 살리려 합니다 \"\\n\\n로맨스 판타지 세계관 속 이야기 입니다.\\n\\n화자를 작품을 감상하는 사람으로 설정하여 제목을 풀어냅니다.\\n\\n어느날 갑자기 소설 속 세계로 들어온 인물.\\n\\n최애의 운명을 바꾸려 연적이 되고 위험 요소가 가득한 황궁으로 뛰어듭니다. 과연 주인공을 최애를 살리고 자신의 세계로 돌아갈 수 있을까요? 두근두근 최애 살리기 프로젝트!\\n대 리카르도 제국 유일 황녀 리카르도 랭고른 에델린\\n\\n황실과 양대산맥을 이루는 개국공신 가문 칼리스토의 유일 후계자 칼리스토 플로렌스\\n\\n이 둘은 아카데미를 함께 보낸 학우이며 황실과 공작가의 우호관계 속에서며 탄탄히 우정을 쌓아왔다.\\n\\n플로렌스는 공작가의 외동딸로 원하는것은 무엇이든 이루며 살아왔고, 선한 인상과 온화한 성품으로 황제의 총애를 얻는 에델린은 자신의 남동생인 황자에게 사랑에 빠진 플로렌스를 위해 둘을 이어준다.\\n\\n여기까지가 세간에 알려진 이야기.\\n\\n평소 황위에 관심을 두지 않은듯해 보였던 에델린은 철저하게 감정을 숨겨오며 황권 지배에 대한 욕망을 키우고 있었다. 여성이기에 황위 계승권이 낮았던 에델린은 자신의 남동생을 황태자 자리에 올리고 실권을 장악하기 위해 칼리스토 가문의 힘이 꼭 필요했다. 그녀는 뒷공작으로 플로렌스를 위험에 빠뜨렸고, 그를 자신의 남동생이 구하게 함으로써 플로렌스가 황자에게 사랑에 빠지게 만드는것에 성공했다.\\n\\n그렇게 플로렌스와 황자의 약혼이 얼마 남지 않은 어느 날 황자가 웬 출신도 모르겠는 촌뜨기 여자를 데려와 자신과 결혼할 여자라고 소개했다. 각자의 계획과 기대가 틀어져 분노한 플로렌스와 에델린은 그 베일에 쌓인 여자를 자신들의 티파티에 초대했다.\\n\\n그 영애의 효용가치를 알기 위해 흥미롭게 관찰하는 에델린과 분노로 가득차 표정도 숨기지 않고 여자를 노려보는 플로렌스 그리고 왜인지는 모르겠지만 조금 설레어하는듯한 영애의 얼굴.\\n\\n이 셋에게는 무슨 이야기가 펼쳐질까?",
        works:[
            {
                type:"picture",
                path:"1.jpeg"
            }
        ]
    },
    {
        id:27,
        category:"Special",
        name:"우리들의 이야기",
        author:["권나예"],
        thumbnail: "1.jpg",
        profile: {
            name:"권나예",
            email:"21sunrin200@sunrint.hs.kr",
            instagram: "@cure_cat_"
        },
        description: "최근 사회 문제, 개인 문제가 심해짐에 따라서 많은 이들이 마음의 상처를 겪는 경우가 많아졌습니다. 저는 그런 개인들에게 조금의 위로를 전해주고 싶어서, 마음의 짐을 조금이나마 덜어주고 싶어서 이런 작품을 제작하게 되었습니다.\n 저의 작품은 사람들에게 익숙한 고양이를 바탕으로, 여러 개인이 가진 마음의 상처를 주로 다루었습니다. 하지만 결국 마음의 상처를 모두 극복하는 이야기를 제작하여 사람들에게 용기와 희망을 줄 수 있도록 작품을 제작하였습니다. 부디 제 작품을 보시는 모든 분들이 행복하길 바라요.\n",
        works:[
            {
                type:"picture",
                path:"1.jpg"
            },
            {
                type:"picture",
                path:"2.jpg"
            }
        ]
    },
    {
        id:28,
        category:"Ghaphic",
        name:"For My Experience",
        author:["하예진"],
        thumbnail: "1.png",
        profile: {
            name:"하예진",
            email:"21sunrin200@sunrint.hs.kr"
        },
        description: "‘생일 카페’란 좋아하는 스타의 생일을 기념하기 위해 팬들이 카페와 협업해 스타의 사진과 관련 소품으로 특정 기간 카페를 꾸미는 이벤트다. 해당 포스터는 생일 카페의 홍보용 포스터로, '우주소녀 엑시'의 생일을 기념하여 열리는 생일카페의 홍보지 개념이다. 한 줄의 필름마다 해당 아이돌의 활동기에 비춰진 모습으로, 맨 뒷줄은 드라마 ' Idol: The Coup ' 의 컨셉촬영때, 두번째 줄은 ' 우주소녀 Unnatural ' 활동기, 맨 앞줄은 ' 컴백 전쟁: 퀸덤 ' 의 커버곡 경연 때 사진이다. 폴라로이드로 노끈에 묶인 사진들은 두 번째 세계 출연 때 한 활동곡들을 나열했다.\n기타 종이에는 주접들을 적어뒀다.\nFor My Experience 라는 제목은 해당 아이돌을 좋아함으로써 겪었던 모든 시간들을 팬들끼리, 또 해당 아이돌과 나눠 생일카페에 방문하는 시간을 즐긴다는 의미를 지니고 있다.\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:29,
        category:"Graphic",
        name:"뎡-이",
        author:["임유영"],
        thumbnail: "1.png",
        profile: {
            name:"임유영",
            email:"limyou8401@gmail.com"
        },
        description: "뎡이라는 캐릭터는 더운 것을 싫어하고 실내에 있는 것을 좋아하는 나의 모습을 아이스크림으로 표현한 캐릭터이다. 나의 외적인 모습인 염색을 자주하고 주로 눈으로 감정을 표현하는 모습을 캐릭터에 담았다. 뎡이라는 이름은 내 이름의 유영의 영과 당을 합성하여 만들었다.",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:30,
        category:"UI/UX",
        name:"MUSIQ 음악 앱",
        author:["AYLIN MEHRVARZAN"],
        thumbnail: "1.png",
        profile: {
            name:"AYLIN MEHRVARZAN",
            email:"aylin20047@gmail.com"
        },
        description: "이 애플리케이션은 유명한 음악 애플리케이션 \"스포티파이\"에서 약간의 영감을 얻은 새로운 음악 애플리케이션 입니다. 친구들과 공유하고 심지어 채팅할 수 있는 \"MUSIQ\"라고 불리는 이 애플리케이션 . 또한 \"MUSIQ\"는 스포티파이보다 훨씬 더 컬러풀하고 앱의 테마를 변경할 수 있습니다.\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:31,
        category:"3D",
        name:"터널",
        author:["이태양"],
        thumbnail: "1.jpg",
        profile: {
            name:"이태양",
            email:"afbossshop0920@naver.com"
        },
        description: "\"터널\"은 학생들의 일상과 내면 세계를 담은 예술 작품입니다. 지하철 터널을 상징적인 공간으로 활용하여 학생들의 다양한 감정과 경험을 표현합니다. 학생들이 혼잣말하거나 친구와 대화하며 웃음 짓거나, 과제에 집중하거나 독서하는 모습이 그려져 있습니다. 작품은 학생들의 일상을 사실적으로 그리고 상상력을 자극하여 감상자에게 학생 시절의 경험과 꿈을 공감하게 합니다.",
        works:[
            {
                type:"picture",
                path:"1.jpg"
            }
        ]
    },
    {
        id:32,
        category:"3D",
        name:"Kitchen_Sapor",
        author:["안희재"],
        thumbnail: "1.jpg",
        profile: {
            name:"안희재",
            email:"jackknihgt1717@gmail.com"

        },
        description: "3d 프로그램인 womp3d를 이용해  Kitchen_Sapor라는 가상의 레스토랑을 만들어 레스토랑에서 \n홍보목적으로 사용할 포스터를 디자인했습니다. 여기서 Sapor은 라틴어로 맛, 미각이라는 뜻으로 레스토랑에 잘 어울리는 이름인 것 같아 사용했습니다. 깔끔한 레스토랑이라는 이미지를 주기위하여 검은색과 밝은 노랑색을 중심으로 사용했습니다.\n",
        works:[
            {
                type:"picture",
                path:"1.jpg"
            }
        ]
    },
    {
        id:33,
        category:"UI/UX",
        name:"또바기",
        author:["김나윤"],
        thumbnail: "1.png",
        profile: {
            name:"김나윤",
            email:"knyxx05@naver.com"

        },
        description: "또바기는 자의적으로 계획을 세우며 목표를 달성할 수 있게 도와주는 응용소프트웨어입니다. 친구들과 함께 참여함으로써 달성률을 높이고 한 달에 얼마나 목표를 달성했는지를 용이하게 확인함으로써 올바른 습관 개선 및 계획 달성에 도움을 주고 건강한 삶을 살 수 있게 도와줍니다.",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:34,
        category:"UI/UX",
        name:"MUPICKE",
        author:["정승민"],
        thumbnail: "1.png",
        profile: {
            name:"정승민",
            email:"wjdtmdals05@naver.com"
        },
        description: "MUSIC과 PICKER를 합친말로 음악을 큐레이션 하고 고르는 기능에 집중한 음악 스트리밍 서비스입니다.\n기존에 있던 불필요한 기능들과 직관적이지 않던 인터페이스들과 달리 메뉴를 간소화해 깔끔하고 직관적이게 만들었습니다.\n에디터가 큐레이션 해 제공하는 재생목록 기능은\n’코앞으로 다가온 여름의 향기‘, ‘여유롭고 따뜻한 감성의 팝 음악‘ 등 직관적인 제목으로 \n원하는 장르, 분위기, 상황에 맞는 음악을 감상할 수 있습니다. \n테마별로 제공하는 추천 재생목록은 사용자의 음악청취 기록, 패턴을 분석해 사용자가 좋아할 음악, 아티스트의 음악들을 추천 재생목록으로 묶어 제공합니다 \n추천 재생목록과 에디터가 큐레이션한 재생목록 기능을 통해 취향에 맞는 새로운 음악을 편리하게 감상할 수 있습니다.\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    },
    {
        id:35,
        category:"UI/UX",
        name:"백아_향기",
        author:["신동민"],
        thumbnail: "1.png",
        profile: {
            name:"신동민",
            email:"sinlio05@naver.com",
            instagram: "@sinlio_124"
        },
        description: "노래를 들으며 문뜩 굳이 나래이션이 아니어도, 전달력이 분명한 노래 정도면, 색다른 느낌을 줄수 있지 않을까? 하는 생각에 노래를 선택하게 되었다.\n" +
            "평소 좋아하던 싱어송라이터 인 ‘백아’ 를 선정하게 되었으며, 이분이 평소 작사하시는 노래들은 가사의 전달력과, 그에 맞는 작곡으로 충분히 어울릴것 같아, 최근 나온 신곡인 ‘향기’ 로 선택하여 제작하게 되었습니다\n",
        works:[
            {
                type:"picture",
                path:"1.png"
            }
        ]
    }
]
