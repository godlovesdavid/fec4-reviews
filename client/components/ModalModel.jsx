import React, { Component } from 'react';
import ProductInfo from './ProductInfo.jsx';
import ModalHeader from './ModalHeader.jsx';
import ProductRatingStars from './ProductRatingStars.jsx';
import UserProductRating from './UserProductRating.jsx';
import UserReview from './UserReview.jsx';
import UserRecommend from './UserRecommend.jsx';
import UserNameAndLoc from './UserNameAndLoc.jsx';
import UserEmail from './UserEmail.jsx';
import UserFit from './UserFit.jsx';
import UserReadReview from './UserReadReview.jsx';
import UserPurchase from './UserPurchase.jsx';
import UserFeedback from './UserFeedback.jsx';
import ModalSubmit from './ModalSubmit.jsx';

class ModalModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const visible = { ...this.state };
    return (
      <div>
        <div role="button" tabIndex={0} className="button-write" onKeyPress={() => {}} onClick={this.handleOpen}>Write Post</div>
        <div className={visible.show ? 'modal-background' : 'hidden'} />
        <div className={visible.show ? 'modal' : 'hidden'}>
          <div id="modal-left">
            <ProductInfo />
          </div>
          <div id="modal-right">
            <ModalHeader handleClose={this.handleClose} />
            <ProductRatingStars />
            <UserProductRating />
            <UserReview />
            <UserRecommend />
            <UserNameAndLoc />
            <UserEmail />
            <UserFit />
            <UserReadReview />
            <UserPurchase />
            <UserFeedback />
            <ModalSubmit />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalModel;
