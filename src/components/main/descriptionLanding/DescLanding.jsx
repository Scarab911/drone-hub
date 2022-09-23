import React from 'react';
import './descLanding.css';
import Drone1 from '../../../assets/images/drone.png';
import Drone2 from '../../../assets/images/img1.png';

export default function DescLanding() {
  return (
    <div className="desc-container">
      <img src={Drone1} alt="drone in air" className="image2 img" />
      <img src={Drone2} alt="drone on table" className="image1 img" />
      <div className="desc1">
        <h1>Lorem, ipsum dolor.</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque eum
        sapiente reprehenderit alias eos nihil ex nulla aliquam illum? Quaerat
        non asperiores voluptate perferendis aliquam nulla quas natus!
        Perferendis, aut. Non repudiandae sapiente iste tempore pariatur, vero
        soluta amet magni maiores ullam nesciunt incidunt voluptatibus
        blanditiis voluptas tempora eveniet nihil molestias ipsam adipisci
        sequi! Nesciunt, iste? Ipsam delectus pariatur similique! Quo temporibus
        dolor recusandae facilis odio quos magnam beatae pariatur incidunt
        quidem repellat magni illum, ad, aliquid quasi, repellendus dicta sed
        voluptatibus doloremque vel enim eligendi earum velit? Numquam, est!
      </div>
      <div className="desc2">
        <h1>Lorem, ipsum dolor.</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam
        totam perspiciatis nisi ipsa quis est quidem praesentium similique
        obcaecati accusantium possimus earum quia a, doloremque blanditiis!
        Blanditiis, necessitatibus corporis. Ab dicta necessitatibus obcaecati
        modi voluptate quae placeat nisi earum officia fugit esse, libero at
        iure deserunt quisquam non consequatur nulla aperiam omnis
        exercitationem vitae! Non obcaecati atque pariatur quis? Possimus, quam
        earum? Quidem, enim. Minus, facere sed nostrum aperiam nulla eos iure
        adipisci aut ab eius cumque sequi explicabo sapiente repudiandae,
        similique ut reprehenderit, velit omnis illo earum quibusdam?
      </div>
    </div>
  );
}
