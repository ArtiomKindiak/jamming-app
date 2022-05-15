import './App.css';
import React from 'react';
import {SearchBar} from "../SearchBar/SearchBar";
import {SearchResults} from "../SearchResults/SearchResults";
import {Playlist} from "../Playlist/Playlist";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchResults:
                [{name: 'Hotter than Hell', artist: 'Dua Lipa', album: '2021', id: 1},
                {name: 'Bam Bam', artist: 'Camilla Cabeyo', album: '2022', id: 2}],
                playlistName: 'My Playlist',
                playlistTracks: [{name: 'Levitating', artist: 'Dua Lipa', album: '2020', id: 3},
                    {name: 'RIP', artist: 'Rita Ora', album: '2012', id: 4}]};
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        tracks.push(track)
        this.setState({playlistTracks: tracks});
    }
    removeTrack(track) {
        let tracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
        this.setState({playlistTracks: tracks});
    }
    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}
                                       onAdd={this.addTrack}/>
                        <Playlist playlistName={this.state.playlistName}
                                  playlistTracks={this.state.playlistTracks}
                                  onRemove={this.removeTrack}/>
                    </div>
                </div>
            </div>
        )
    }
}