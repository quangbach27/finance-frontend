import { act, renderHook } from '@testing-library/react';
import useDevice from '@hooks/useDevice';

const originalInnerWidth = window.innerWidth;

const resizeWindow = (width: number) => {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
};

describe('useDevice', () => {
    afterEach(() => {
        window.innerWidth = originalInnerWidth;
        jest.clearAllMocks();
    });

    it('should return correct device info for mobile view', () => {
        window.innerWidth = 500;
        const { result } = renderHook(() => useDevice());

        expect(result.current).toEqual({
            mobile: true,
            tablet: false,
            desktop: false,
            greaterEqualThan: {
                tablet: false,
            },
            lessEqualThan: {
                tablet: true,
            },
        });
    });

    it('should return correct device info for tablet view', () => {
        window.innerWidth = 800;
        const { result } = renderHook(() => useDevice());

        expect(result.current).toEqual({
            mobile: false,
            tablet: true,
            desktop: false,
            greaterEqualThan: {
                tablet: true,
            },
            lessEqualThan: {
                tablet: true,
            },
        });
    });

    it('should return correct device info for desktop view', () => {
        window.innerWidth = 1200;
        const { result } = renderHook(() => useDevice());

        expect(result.current).toEqual({
            mobile: false,
            tablet: false,
            desktop: true,
            greaterEqualThan: {
                tablet: true,
            },
            lessEqualThan: {
                tablet: false,
            },
        });
    });

    it('should update values when resizing the window', () => {
        // Start at Desktop
        window.innerWidth = 1200;
        const { result } = renderHook(() => useDevice());

        expect(result.current.desktop).toBe(true);
        expect(result.current.mobile).toBe(false);
        expect(result.current.tablet).toBe(false);

        // Resize to Tablet
        act(() => {
            resizeWindow(900);
        });

        expect(result.current.desktop).toBe(false);
        expect(result.current.tablet).toBe(true);
        expect(result.current.mobile).toBe(false);

        // Resize to 600px (Mobile)
        act(() => {
            resizeWindow(600);
        });
        expect(result.current.desktop).toBe(false);
        expect(result.current.tablet).toBe(false);
        expect(result.current.mobile).toBe(true);
    });

    it('should remove resize event listener on unmount', () => {
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
        const removeEventListenerSpy = jest.spyOn(
            window,
            'removeEventListener',
        );

        const { unmount } = renderHook(() => useDevice());

        // Check if event listener was added
        expect(addEventListenerSpy).toHaveBeenCalledWith(
            'resize',
            expect.any(Function),
        );

        // Unmount the component
        unmount();

        // Check if event listener was removed
        expect(removeEventListenerSpy).toHaveBeenCalledWith(
            'resize',
            expect.any(Function),
        );
    });
});
