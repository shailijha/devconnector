import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  const mapLanguageIcons = new Map([
    ['html', <i class='fab fa-html5 fa-2x' />],
    ['php', <i class='fab fa-php fa-2x' />],
    ['java', <i class='fab fa-java fa-2x' />],
    ['javascript', <i class='fab fa-js-square fa-2x' />],
    ['js', <i class='fab fa-js-square fa-2x' />],
    ['react', <i class='fab fa-react fa-2x' />],
    ['css', <i class='fab fa-css3-alt fa-2x' />],
    ['python', <i class='fab fa-python fa-2x' />]
  ]);

  return (
    <div className='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
          <p>{bio}</p>
          <div className='line' />
        </Fragment>
      )}
      <h2 className='text-primary'>Skill Set</h2>
      <div className='skills'>
        {skills.map((skill, index) => (
          <div key={index} className='p-1'>
            {mapLanguageIcons.has(skill.toLowerCase()) ? (
              mapLanguageIcons.get(skill.toLowerCase())
            ) : (
              <i class='fa fa-check' />
            )}
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
