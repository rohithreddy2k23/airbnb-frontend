import React from 'react';

const PerksWidget = ({ perks }) => {
  return (
    <div className="mt-4">
      <hr className="mb-5 border" />
      <p className="text-2xl font-semibold">What this place offers</p>

      <div className="mt-4 grid flex-col gap-4 lg:grid-cols-2 lg:justify-items-stretch lg:gap-4">
        {/* Wifi */}
        <div className="flex gap-4">
          <svg /* icon omitted for brevity */ className="h-6 w-6" />
          <span className={`${perks?.includes('Wifi') ? '' : 'line-through'}`}>
            Wifi
          </span>
        </div>

        {/* TV */}
        <div className="flex gap-4">
          <svg /* icon omitted for brevity */ className="h-6 w-6" />
          <span className={`${perks?.includes('TV') ? '' : 'line-through'}`}>
            TV
          </span>
        </div>

        {/* Free parking spot */}
        <div className="flex gap-4">
          <svg /* icon omitted for brevity */ className="h-6 w-6" />
          <span className={`${perks?.includes('Free parking spot') ? '' : 'line-through'}`}>
            Free parking spot
          </span>
        </div>

        {/* Radio */}
        <div className="flex gap-4">
          <svg /* icon omitted for brevity */ className="h-6 w-6" />
          <span className={`${perks?.includes('Radio') ? '' : 'line-through'}`}>
            Radio
          </span>
        </div>

        {/* Pets */}
        <div className="flex gap-4">
          <svg /* icon omitted for brevity */ className="h-6 w-6" />
          <span className={`${perks?.includes('Pets') ? '' : 'line-through'}`}>
            Pets
          </span>
        </div>

        {/* Private entrance */}
        <div className="flex gap-4">
          <svg /* icon omitted for brevity */ className="h-6 w-6" />
          <span className={`${perks?.includes('Private entrance') ? '' : 'line-through'}`}>
            Private entrance
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerksWidget;
