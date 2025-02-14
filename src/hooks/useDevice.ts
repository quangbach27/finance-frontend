import { useEffect, useState } from 'react';
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
};

type DeviceType = keyof typeof breakpoints | 'xs';

export default function useDevice(): DeviceType {
    const [device, setDevice] = useState<DeviceType>('xs');

    useEffect(() => {
        const updateDevice = () => {
            const width = window.innerWidth;
            let newDevice: DeviceType = 'xs';
            for (const [breakpoint, value] of Object.entries(breakpoints)) {
                if (width > value) {
                    newDevice = breakpoint as DeviceType;
                }
            }
            setDevice(newDevice);
        };

        //Run initially
        updateDevice();

        window.addEventListener('resize', updateDevice);

        return () => {
            window.removeEventListener('resize', updateDevice);
        };
    }, []);

    return device;
}
