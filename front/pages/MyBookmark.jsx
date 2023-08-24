import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import AppLayout from '../components/common/AppLayout';
import ScrapBook from '../components/users/ScrapBook';
import { Link } from 'react-router-dom';

const MyBookmark = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <ScrapBook />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyBookmark;
