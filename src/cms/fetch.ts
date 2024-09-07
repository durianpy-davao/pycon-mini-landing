import { emptyResponse, mapCMSResponseToModel } from './mappers';

export async function fetchCMS() {
  try {
    const response = await fetch(import.meta.env.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.ACCESS_KEY}`,
      },
      body: JSON.stringify({
        query: `
             query {
                listEventSchedules {
                    data {
                        scheduleTitle
                        scheduleStartTime
                        scheduleEndTime
                        scheduleActivities {
                            scheduleTitle
                            speaker {
                                image
                                name
                                talkTitle
                                company
                                position
                                bionote
                            }
                            startTime
                            endTime
                        }
                    }
                }
                listSpeakerModels {
                    data {
                        image
                        name
                        talkTitle
                        company
                        position
                        bionote
                    }
                }
                listSponsorTierModels{
                    data {
                        name
                        order
                        displayName
                        billingAcknowledgement
                    }
                }
                listSponsorModels{
                    data {
                        image
                        name
                        tagline
                        position
                        website
                        sponsorTier {
                            name
                            order
                            displayName
                            billingAcknowledgement
                        }
                    }
                }
            }
        `,
      }),
    });
    const res = await response.json();
    const CMS = mapCMSResponseToModel(res);
    return CMS;
  } catch (error) {
    console.error(error);
    return emptyResponse;
  }
}
