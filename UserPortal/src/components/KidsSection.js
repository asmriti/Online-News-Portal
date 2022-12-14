import React from "react";

import PlayGames from "../components/PlayGames";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import "./KidsStyle.css";

import HeroImage from "../images/HeroImage.jpeg";
import poems from "../images/poems.jpg";
import logoimg from "../images/logo1.png";
import games from "../images/games-1.jpg";
import kidsimg from "../images/kidsimg.png";
import stories from "../images/stories-1.jpg";
import biography from "../images/biography-1.jpg";

function KidsSection() {
  return (
    <div className="kid-page">
      <Nav />
      <div className="hero-section-wrapper">
        <div className="img-wrapper">
          <img src={HeroImage} alt=""></img>
        </div>
        {/* Absolute content */}
        <div className="content">
          <h1>KidsLand</h1>
          <div className="hidden-img">
            <img src={kidsimg}></img>
          </div>
          <p>
            The world of <span className="highlights">Imagination</span>,{" "}
            <span className="highlights">Creativity</span>,{" "}
            <span className="highlights">Knowledge</span> and{" "}
            <span className="highlights">Fun</span> begins here.
          </p>
        </div>
      </div>

      <div className="stories-section">
        <h1 className="section-heading">Mysterious Stories</h1>
        <div className="wrapper">
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-darNbHqLuk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="story-wrapper">
            <h2 className="story-heading">Jack and the Bean Stalk</h2>
            <p>
              Once upon a time there was a boy called Jack. He lived with his
              mother. They were very poor. All they had was a cow. One morning,
              Jack’s mother told Jack to take their cow to market and sell her.
              On the way, Jack met a man. He gave Jack some magic beans for the
              cow. Jack took the beans and went back home. When Jack’s mother
              saw the beans she was very angry. She threw the beans out of the
              window. The next morning, Jack looked out of the window. There was
              a giant beanstalk. He went outside and started to climb the
              beanstalk. He climbed up to the sky through the clouds. Jack saw a
              beautiful castle. He went inside. Jack heard a voice. ‘Fee, fi,
              fo, fum!’ Jack ran into a cupboard. An enormous giant came into
              the room and sat down. On the table there was a hen and a golden
              harp. ‘Lay!’ said the giant. The hen laid an egg. It was made of
              gold. ‘Sing!’ said the giant. The harp began to sing. Soon the
              giant was asleep. Jack jumped out of the cupboard. He took the hen
              and the harp. Suddenly, the harp sang, ‘Help, master!’ The giant
              woke up and shouted, ‘Fee, fi, fo, fum!’ Jack ran and started
              climbing down the beanstalk. The giant came down after him. Jack
              shouted, ‘Mother! Help!’ Jack’s mother took an axe and chopped
              down the beanstalk. The giant fell and crashed to the ground.
              Nobody ever saw him again. With the golden eggs and the magic
              harp, Jack and his mother lived happily ever after.
            </p>
          </div>

          <div className="story-wrapper">
            <h2 className="story-heading">This is the story heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciat
            </p>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nFYlN5Fayvs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mLVRGfeHkas"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="story-wrapper">
            <h2 className="story-heading">This is the story heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciat
            </p>
          </div>

          <div className="story-wrapper">
            <h2 className="story-heading">Jack and the Bean Stalk</h2>
            <p>
              Once upon a time there was a boy called Jack. He lived with his
              mother. They were very poor. All they had was a cow. One morning,
              Jack’s mother told Jack to take their cow to market and sell her.
              On the way, Jack met a man. He gave Jack some magic beans for the
              cow. Jack took the beans and went back home. When Jack’s mother
              saw the beans she was very angry. She threw the beans out of the
              window. The next morning, Jack looked out of the window. There was
              a giant beanstalk. He went outside and started to climb the
              beanstalk. He climbed up to the sky through the clouds. Jack saw a
              beautiful castle. He went inside. Jack heard a voice. ‘Fee, fi,
              fo, fum!’ Jack ran into a cupboard. An enormous giant came into
              the room and sat down. On the table there was a hen and a golden
              harp. ‘Lay!’ said the giant. The hen laid an egg. It was made of
              gold. ‘Sing!’ said the giant. The harp began to sing. Soon the
              giant was asleep. Jack jumped out of the cupboard. He took the hen
              and the harp. Suddenly, the harp sang, ‘Help, master!’ The giant
              woke up and shouted, ‘Fee, fi, fo, fum!’ Jack ran and started
              climbing down the beanstalk. The giant came down after him. Jack
              shouted, ‘Mother! Help!’ Jack’s mother took an axe and chopped
              down the beanstalk. The giant fell and crashed to the ground.
              Nobody ever saw him again. With the golden eggs and the magic
              harp, Jack and his mother lived happily ever after.
            </p>
          </div>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VwSSPGTQsFk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="arts-section">
        <h2 className="section-heading">Today's showcase</h2>
        <div className="art-wrapper">
          <div className="art">
            <h2 className="art-heading">My Dear School</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc19.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">My pet, The Dog</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc18.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">Butterfly, Hey Butterfly</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc21.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">School is the best</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc17.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">My Dream House</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc16.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">My painting</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc15.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">Niome, my drawing</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc14.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">Losing Hope</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc13.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">Elephant</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc_.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">My pet bird, Cookie</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc_pet_bird.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">My car</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc_car.jpg" />
            </div>
          </div>
          <div className="art">
            <h2 className="art-heading">My boat</h2>
            <div className="art-img-wrapper">
              <img src="https://www.thecuriousowl.net/upload/owletcorners/oc10.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="biography-section">
        <h2 className="section-heading">Incredible People</h2>
        <div className="biography-wrapper">
          <div className="biography">
            <h2 className="biograhpy-heading">Today's Pick : Helen Keller</h2>
            <div className="img-wrapper">
              <img src="https://media.gettyimages.com/id/515391044/photo/helen-keller-reading-braille.jpg?s=612x612&w=gi&k=20&c=IHgxEyOgu_LDnD6NCuKLb91Q-eUQVkmFU8SmQTo_zQk="></img>
            </div>
            <div className="description">
              <h2 className="sub-heading">Who was Helen Keller?</h2>
              <p>
                Helen Adams Keller was an American author, political activist
                and lecturer. She was the first deaf – blind person to earn a
                Bachelor of Arts degree. After graduating from Radcliffe, she
                went on to become one of the most influential people in the 20th
                Century. She worked for the rights of persons with disabilities,
                women and under privileged sections of society.
              </p>
              <h2 className="sub-heading">Early Life</h2>
              <p>
                Helen Keller was born a normal child in Tuscumbia, Alabama on
                June 27, 1880. She lost her hearing and sight at 19 months of
                age to what is now diagnosed as scarlet fever. Five years later,
                her parents, on Alexander Graham Bell’s advice, applied to hire
                a teacher from the Perkins Institute for the Blind, in Boston.
              </p>
              <h2 className="sub-heading">Helen Keller and Anne Sullivan </h2>
              <p>
                Anne Mansfield Sullivan was able to bring about an extraordinary
                transformation in Helen’s isolated world. She taught Helen to
                understand and communicate with the world around her. She went
                on to acquire an excellent education and become an important
                spokesperson for the blind and the deaf. Anne Sullivan taught
                Helen to read and write in Braille and hand signals of the deaf
                mute, which she could understand by touch. Her efforts to speak
                later on in life, were not as successful, when she went on to
                become a public figure, but she was able to make herself be
                understood.
              </p>
              <h2 className="sub-heading">Parents and Family</h2>
              <p>
                Helen Adams Keller’s father Arthur H Keller, was an editor for
                the Tuscumbia North Alabamian and had served as a captain for
                the Confederate Army. Her mother Kate Adam’s father was Charles
                W Adams, a Confederate general, in theAmerican Civil War.
              </p>
              <p>
                Helen had two siblings, Mildred Campbell and Philip Brooks
                Keller, and two older half brothers from her father’s prior
                marriage, James and William Simpson Keller.
              </p>
              <h2 className="sub-heading">Education and Achievements</h2>
              <p>
                Helen Keller started attending the Perkins Institute for the
                Blind in May, 1888. Anne Sullivan and Helen Keller moved to New
                York to attend the Wright – Humason School for the Deaf, and to
                learn from Sarah Fuller at the Horace Mann School for the Deaf.
                In 1896, they returned to Massachusetts and Helen entered The
                Cambridge School for Young Ladies before gaining admittance to
                Radcliffe in 1900.
              </p>
              <p>
                She became the first deaf blind person to earn a Bachelor of
                Arts degree, at the age of 24 in 1904.
              </p>
              <p>
                Helen Keller was determined to communicate with others and she
                learned to speak. She spent much of her life giving lectures and
                speeches. She learned to read lips with her finger tips, so she
                could ‘listen’ to other people’s speeches.
              </p>
              <p>
                She is known for her strong support for people with
                disabilities. She travelled to over 25 countries, giving
                lectures and motivational speeches about deaf people’s
                conditions.
              </p>
              <h2 className="sub-heading">Political and Social Activism</h2>
              <p>
                Apart from this, she was a woman’s rights activist, a political
                activist, a social activist and a pacifist. She also helped set
                up several foundations for the various causes she believed in,
                like the Helen Keller International organisation, along with
                George A Kessler, and it is devoted to research in vision,
                health and nutrition.
              </p>
              <p>
                She also helped to found the American Civil Liberties Union
                (ACLU).
              </p>
              <h2 className="sub-heading">Writings and Literary Career</h2>
              <p>
                Helen Keller wrote a total of 12 published books and several
                articles.
              </p>
              <h2 className="sub-heading">Books by Helen Keller</h2>
              <li>The Frost King</li>
              <li>The Story of My Life</li>
              <li>The World I Live In</li>
              <li>Out of the Dark</li>
              <li>
                My Religion, later revised and published as Light in My Darkness
              </li>
              and many more
              <h2 className="sub-heading">Later Years</h2>
              <p>
                Helen Keller suffered several strokes in 1961 and spent the last
                years of her life at home. She spent much of her time raising
                funds for the American Foundation for the Blind. She died in her
                sleep on June, 1968, at her home, ‘Arcan Ridge’, located in
                Easton, Connecticut, a few days short of her 88th birthday. She
                is buried at the Washington National Cathedral in Washington,
                DC.
              </p>
              <h2>6 Interesting facts about Helen Keller</h2>
              <li>
                Helen Keller is Perkins School for the Blind’s most famous
                student
              </li>
              <li>She was nominated for the Nobel Peace Prize, in 1953</li>
              <li>
                Helen Keller and Anne Sullivan worked for 5 years in vaudeville
                to supplement their income. She was promoted as the 8th Wonder
                of the World and told her life’s story
              </li>
              <li>
                Although blind and deaf, Helen was very political and had very
                intelligent and strong opinions
              </li>
              <li>
                She was great friends with the writer Mark Twain and inventor
                Graham Bell
              </li>
              <li>
                Helen’s first word was ‘water’, when she understood the
                connection between the feeling of water running on her hand and
                Anne Sullivan described the word on her hand. She quickly
                demanded to learn as many words as possible. Anne Sullivan
                herself was visually impaired.
              </li>
              <h2 className="sub-heading">Awards and Honours</h2>
              <p>She was awarded the Presidential Medal of Freedom in 1964</p>
              <p>
                Ranked one of the 100 most influential person of the 20th
                Century, according to TIME magazine
              </p>
              <p>
                A commemorative stamp was issues by the US Postal Service in
                1980
              </p>
              <p>
                The state of Alabama issued a quarter with Helen Keller on it,
                during the US Mint’s commemorative 50 State Quarters Program
              </p>
              <p>She was inducted into the Alabama Women’s Hall of Fame</p>
              <h2 className="sub-heading">3 Famous quotes by Helen Keller</h2>
              <p>
                ‘The best and most beautiful things in the world cannot be seen
                or even touched. They must be felt with the heart.’
              </p>
              <p>
                ‘Character cannot be developed in ease and quiet. Only through
                experience of trial and suffering can the soul be strengthened,
                vision cleared, ambition inspired, and success achieved.’
              </p>
              <p>
                ‘Your success and happiness lies in you. Resolve to keep happy,
                and your joy and you shall form an invincible host against
                difficulties.’
              </p>
            </div>
          </div>
          <div className="biography-cards">
            <h2 className="title">Read more</h2>
            <div className="card">
              <div className="img-wrapper">
                <img src="https://mocomi.com/wp-content/uploads/2017/08/Nikola-Tesla-Biography_HP.jpg" />
              </div>
              <h2 class="card-name">Nikola Tesla</h2>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc" />
              </div>
              <h2 class="card-name">Albert Einstien</h2>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOEeFz2pZDF22Vs7eLn01o3Ey1DUx_j3Dog&usqp=CAU" />
              </div>
              <h2 class="card-name">Prithivi Narayan Shah</h2>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src="https://i2.wp.com/telltaleladies.com/wp-content/uploads/2021/02/Pasang-Lhuma-Sherpa.jpg?resize=1000%2C667&ssl=1" />
              </div>
              <h2 class="card-name">Pasang Lamu Sherpa</h2>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src="https://www.nepalitimes.com/wp-content/uploads/2018/05/page-11b-2.jpg" />
              </div>
              <h2 class="card-name">Arniko</h2>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src="https://indiatonepal.com/assets/img/lavkush2.jpg" />
              </div>
              <h2 class="card-name">Godess Sita</h2>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQY_r3qjoTfSpYoeTkRM4ed-zlrJzrqnB0qvPEuSsYSfG5ggJu" />
              </div>
              <h2 class="card-name">Mahabir Pun</h2>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <img src="https://notesnepal.com/wp-content/uploads/2020/09/Buddh.jpeg" />
              </div>
              <h2 class="card-name">Lord Buddha</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="game-section">
        <h2 className="section-heading">Brain Games</h2>
        <div className="games-wrapper">
          <div className="game-card">
            <div className="img-wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UB_jVlmn6cscMPVllRtCWcm9mYxdxT7Vnw&usqp=CAU" />
            </div>
            <h2 class="game-name">Sheffers Crossword</h2>
          </div>

          <div className="game-card">
            <div className="img-wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB47CgS-F9krqCSkXf_C_YABudqEwasHkE8A&usqp=CAU" />
            </div>
            <h2 class="game-name">Sokodu</h2>
          </div>

          <div className="game-card">
            <div className="img-wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqWgXuexCCArQypK2e8T15f2ddLbNFbYEyQ&usqp=CAU" />
            </div>
            <h2 class="game-name">Bugs Bash</h2>
          </div>

          <div className="game-card">
            <div className="img-wrapper">
              <img src="https://thumbs.dreamstime.com/z/quest-game-poster-real-life-room-escape-74459793.jpg" />
            </div>
            <h2 class="game-name">Escape Room</h2>
          </div>

          <div className="game-card">
            <div className="img-wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQbCrkKmTFtxYnabo3yf1EggOmaVcnagbwQ&usqp=CAU" />
            </div>
            <h2 class="game-name">Brain Teasers</h2>
          </div>

          <div className="game-card">
            <div className="img-wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuN1jQkBVPJVGiv_M09jEom1su0LP5Q3ZXQ&usqp=CAU" />
            </div>
            <h2 class="game-name">Chess</h2>
          </div>
          <div className="game-card">
            <div className="img-wrapper">
              <img src="https://img.myloview.com/posters/square-maze-game-for-kids-puzzle-for-children-labyrinth-conundrum-vector-illustration-find-the-right-path-700-275775853.jpg" />
            </div>
            <h2 class="game-name">The Maze</h2>
          </div>
          <div className="game-card">
            <div className="img-wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH28Q4YgnPug3pYhaS8Nq5oxIeXKrIGnLqAw&usqp=CAU" />
            </div>
            <h2 class="game-name">Chinese Chess</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KidsSection;
