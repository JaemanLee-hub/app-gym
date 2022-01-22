import SlideCard from './SlideCard'

export default {
  title: 'Componetns/Home',
  component: SlideCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <SlideCard {...args} />

export const 기본_슬라이드 = Template.bind()

기본_슬라이드.args = {
  title: '카이 선생님',
  imageUrl:
    'https://api.da-gym.net/trainers/images/3owE6so2bU+KNKArVHQyRLq.jpg',
}
