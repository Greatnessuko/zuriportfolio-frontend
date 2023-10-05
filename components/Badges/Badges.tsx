type BadgesProps = {
  badgeImage: string;
  badgeType: string;
  scorePercentage: string;
};

const Badges: React.FC<BadgesProps> = ({ badgeImage, badgeType, scorePercentage }) => {
  return (
    <section className="h-4/5 bg-white">
      <div>
        <div className="flex items-center justify-center">
          <img src="/assets/images/badges/emoji-happy.png" alt=" smiley face emoji" />
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default Badges;
