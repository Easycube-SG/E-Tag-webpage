const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLScVoDpv0-E5UKrmEfc1b4rz5CmoeJyfzGaQPHVMgf0x8oBgMQ/formResponse'

const FIELD_IDS = {
  name: 'entry.721296124',
  shopName: 'entry.789876498',
  address: 'entry.2064208640',
  dailyParcels: 'entry.1854097039',
  contactNo: 'entry.287447346',
  email: 'entry.1165966700',
} as const

export type ContactFormPayload = {
  name: string
  shopName: string
  address: string
  dailyParcels: string
  contactNo: string
  email: string
}

export async function submitToGoogleForm(data: ContactFormPayload): Promise<void> {
  const body = new URLSearchParams({
    emailAddress: data.email,
    [FIELD_IDS.name]: data.name,
    [FIELD_IDS.shopName]: data.shopName,
    [FIELD_IDS.address]: data.address,
    [FIELD_IDS.dailyParcels]: data.dailyParcels,
    [FIELD_IDS.contactNo]: data.contactNo,
    [FIELD_IDS.email]: data.email,
    fvv: '1',
    pageHistory: '0',
  })

  await fetch(GOOGLE_FORM_ACTION, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  })
}
