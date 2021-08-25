import React, { useState } from 'react';
import { Container, Notification, Paragraph } from '@jp-olvera/jp-viaducto-components';
import { AvatarProps } from '@jp-olvera/jp-viaducto-components/dist/cells/Avatar/Avatar';

const today = new Date();
const minutes = new Date(
  `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} ${today.getHours()}:${
    today.getMinutes() - 1
  }`
);
const hours = new Date(
  `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} ${today.getHours() - 2}:${
    today.getMinutes() - 1
  }`
);

const yesterday = new Date(`${today.getMonth() + 1}/${today.getDate() - 1}/${today.getFullYear()}`);
const days = new Date(`${today.getMonth() + 1}/${today.getDate() - 3}/${today.getFullYear()}`);

interface NotificationsInterfaceProps {
  title: string;
  avatar: AvatarProps;
  time: Date;
  description?: any;
}

const notifications: NotificationsInterfaceProps[] = [
  {
    title: 'New customer',
    avatar: { src: 'https://i.pravatar.cc/300', alt: 'notification-img' },
    time: today,
    description: (
      <Paragraph size='xs' color='gray' weight='bold'>
        Juan Olvera buy 25MB
      </Paragraph>
    ),
  },

  {
    title: 'Failed payment',
    avatar: { src: 'https://i.pravatar.cc/300', alt: 'notification-pay' },
    time: minutes,
    description: (
      <Paragraph size='xs' color='danger' weight='bold'>
        Invalid credit card
      </Paragraph>
    ),
  },
  {
    title: 'Success payment',
    avatar: { src: 'https://i.pravatar.cc/300', alt: 'notification-pay' },
    time: hours,
  },
  {
    title: 'Password change',
    avatar: { src: 'https://i.pravatar.cc/300', alt: 'notification-password' },
    time: yesterday,
    description: (
      <Paragraph size='xs' color='success' weight='bold'>
        Success
      </Paragraph>
    ),
  },
  {
    title: 'Login attempt',
    avatar: { src: 'https://i.pravatar.cc/300', alt: 'notification-pay' },
    time: days,
    description: (
      <Paragraph size='xs' color='warning' weight='bold'>
        Login from IPhone
      </Paragraph>
    ),
  },
];

const shuffle = (array: NotificationsInterfaceProps[]) => {
  let currentIndex: number = array.length,
    randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const data = shuffle(notifications);

const NotificationData = ({ number, setNumber }: { number: number; setNumber: Function }) => {
  const [notification, setNotification] = useState<Number[]>([]);
  const [hide, setHide] = useState<{ index: number; hide: boolean }>({ index: 0 - 1, hide: false });
  const [itemsShowed] = useState(number || 0);

  return (
    <Container expandHorizontal vertical='sm' tabIndex={0} style={{ overflowX: 'hidden' }}>
      {data.map(
        (items: NotificationsInterfaceProps, index: number) =>
          index < itemsShowed &&
          !notification.includes(index) && (
            <Container
              tabIndex={0}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  setHide({ index: index, hide: true });
                  setTimeout(() => {
                    setHide({ index: -1, hide: false });
                    setNotification((before) => [...before, index]);
                    setNumber((before: number) => (before - 1 >= 0 ? before - 1 : 0));
                  }, 200);
                }
              }}
              key={items.title}
              vertical='xs'
              expandHorizontal
              horizontal='sm'
              className={hide.hide && hide.index === index ? 'animated-hide' : 'animated-show'}
            >
              <Notification
                {...items}
                onClick={() => {
                  setHide({ index: index, hide: true });
                  setTimeout(() => {
                    setHide({ index: -1, hide: false });
                    setNotification((before) => [...before, index]);
                    setNumber((before: number) => (before - 1 >= 0 ? before - 1 : 0));
                  }, 200);
                }}
              />
            </Container>
          )
      )}
    </Container>
  );
};

export default NotificationData;
