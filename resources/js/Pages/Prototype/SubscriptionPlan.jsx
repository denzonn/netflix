import Authenticated from '@/Layouts/Authenticated/Index'
import SubscriptionCard from '@/Components/SubscriptionCard'

export default function SubscriptionPlan() {
  return (
    <Authenticated>
      <div class="py-20 flex flex-col items-center">
        <div class="text-black font-semibold text-[26px] mb-3">
          Pricing for Everyone
        </div>
        <p class="text-base text-gray-1 leading-7 max-w-[302px] text-center">
          Invest your little money to get a whole new experiences from movies.
        </p>

        {/* Pricing Card */}
        <div class="flex justify-center gap-10 mt-[70px]">
          {/* Basic */}
          <SubscriptionCard
            name="Basic"
            price="200000"
            duration="2"
            features={['Features 1', 'Features 1', 'Features 1']}
          />
          {/* <!-- For Greatest --> */}
          <SubscriptionCard
            isPremium
            name="Premium"
            price="800000"
            duration="6"
            features={[
              'Features 1',
              'Features 1',
              'Features 1',
              'Features 1',
              'Features 1',
            ]}
          />
        </div>
        {/* <!-- /Pricing Card --> */}
      </div>
    </Authenticated>
  )
}
