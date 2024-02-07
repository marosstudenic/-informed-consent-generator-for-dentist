import puppeteer from 'puppeteer'

export async function POST(req: Request) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setContent('<h1>Hello, Puppeteer!</h1>')
    await page.emulateMediaType('screen')

    const pdfBuffer = await page.pdf({ format: 'A4' })

    return new Response(pdfBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="example.pdf"'
        }
    })
}


