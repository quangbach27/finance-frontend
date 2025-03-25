'use client';
import { useCallback, useEffect, useState } from 'react';

type DeviceInfo = {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
    greaterEqualThan: {
        tablet: boolean;
    };
    lessEqualThan: {
        tablet: boolean;
    };
};

const BREAK_POINTS = {
    md: 768,
    lg: 1024,
} as const;

const getDeviceInfo = (width: number): DeviceInfo => {
    const isTabletOrLarger = width > BREAK_POINTS.md;
    const isDesktop = width > BREAK_POINTS.lg;

    return {
        mobile: !isTabletOrLarger,
        tablet: isTabletOrLarger && !isDesktop,
        desktop: isDesktop,
        greaterEqualThan: {
            tablet: isTabletOrLarger,
        },
        lessEqualThan: {
            tablet: !isDesktop,
        },
    };
};

const useDevice = (): DeviceInfo => {
    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(
        getDeviceInfo(typeof window !== 'undefined' ? window.innerWidth : 0),
    );

    const handleResize = useCallback(() => {
        setDeviceInfo(getDeviceInfo(window.innerWidth));
    }, []);

    useEffect(() => {
        // Initialize with correct value on mount
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return deviceInfo;
};

export default useDevice;
