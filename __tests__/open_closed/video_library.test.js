const borrow = require('../../src/open_closed/video_library.js')
const restrictedBorrow = require('../../src/open_closed/video_library_extended.js')

describe('borrow a video', () => {

    const customer = {
        id: 'jgorman',
        borrowedVideos: []
    }
    const video = {
        onLoan: false,
        borrower: undefined
    }

    const loan = borrow(customer, video);

    it('should add video to customer borrowed collection', () => {
        expect(loan.customer.borrowedVideos).toContainEqual(video);
    })

    it('should flag video as on loan', () => {
        expect(loan.video.onLoan).toBe(true);
    })

    it('should record who has borrowed the video', () => {
        expect(loan.video.borrower).toBe(customer.id);
    })

    describe('borrow a video with restricions', () => {

        const customer1 = {
            id: 'jgorman',
            borrowedVideos: [],
            age: 15
        }

        const customer2 = {
            id: 'anchorman',
            borrowedVideos: [],
            age: 20
        }

        const video = {
            rating: 18,
            onLoan: false,
            borrower: undefined
        }

        const restrictedLoan1 = restrictedBorrow(customer1, video);
        const restrictedLoan2 = restrictedBorrow(customer2, video);

        it('should not add video to customer1 borrowed collection', () => {
            expect(restrictedLoan1.customer.borrowedVideos.length).toBe(0);
        })
    
        it('should flag video as on loan', () => {
            expect(loan.video.onLoan).toBe(true);
        })
    
        it('should record who has borrowed the video', () => {
            expect(loan.video.borrower).toBe(customer.id);
        })

    })
})