import { gentlemenInfo, gentlemanInfo } from '../interfaces/gentlemanInfo';

const url = 'http://localhost:3000/gentlemen/';

export function getAllGentlemen(): Promise<gentlemenInfo> {
    return fetch(url).then((resp) => resp.json());
}
export function addGentleman(
    gentData: Partial<gentlemanInfo>
): Promise<gentlemanInfo> {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(gentData),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function updateGentleman(
    gentData: gentlemanInfo
): Promise<gentlemanInfo> {
    return fetch(url + gentData.id, {
        method: 'PATCH',
        body: JSON.stringify(gentData),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function deleteGentleman(id: gentlemanInfo['id']) {
    return fetch(url + id, {
        method: 'DELETE',
    });
}
