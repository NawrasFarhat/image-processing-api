import resizeImage from '../utilities/resizeImage'

describe('Image Resize Test', () => {
  it('should resize image', async () => {
    const result = await resizeImage('fjord', 200, 200)
    expect(result).toBeDefined()
  })
})